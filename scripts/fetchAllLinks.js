import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

if (!RAPIDAPI_KEY || !RAPIDAPI_HOST) {
  console.error('Missing RAPIDAPI_KEY or RAPIDAPI_HOST in .env file');
  process.exit(1);
}

// Rate limiting helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API call helper
async function apiCall(endpoint, params = {}) {
  const url = new URL(`https://${RAPIDAPI_HOST}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, value);
  });

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Get following list for a user
async function getFollowings(screenname) {
  try {
    const data = await apiCall('/following.php', { screenname });
    await delay(1000); // 1 second delay to avoid rate limits
    return data?.following || [];
  } catch (error) {
    console.error(`  Error fetching followings for @${screenname}: ${error.message}`);
    return [];
  }
}

// Progress file to allow resuming if interrupted
const PROGRESS_FILE = path.join(__dirname, 'linkCrawlProgress.json');

function loadProgress() {
  try {
    if (fs.existsSync(PROGRESS_FILE)) {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
    }
  } catch (e) {
    console.warn('Could not load progress file, starting fresh.');
  }
  return { completedHandles: [], followingMap: {} };
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function main() {
  console.log('=== Fetch All Links Between Existing Profiles ===\n');

  // Read existing constants.ts to extract current node IDs
  const constantsPath = path.join(__dirname, '..', 'constants.ts');
  const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

  // Extract the nodes array - find all node IDs (handles)
  const nodeIdRegex = /"id":\s*"([^"]+)"/g;
  const profileIds = new Set();
  let match;
  while ((match = nodeIdRegex.exec(constantsContent)) !== null) {
    profileIds.add(match[1].toLowerCase());
  }

  // Also extract from links to avoid counting those
  // We need just the node IDs, so let's parse more carefully
  // Extract everything between "nodes:" and "links:"
  const nodesMatch = constantsContent.match(/nodes:\s*(\[[\s\S]*?\]),\s*links:/);
  if (!nodesMatch) {
    console.error('Could not parse nodes from constants.ts');
    process.exit(1);
  }

  const nodesArray = JSON.parse(nodesMatch[1]);
  const handles = nodesArray.map(n => n.id);
  const handleSet = new Set(handles.map(h => h.toLowerCase()));

  console.log(`Found ${handles.length} existing profiles to crawl.\n`);

  // Load progress (for resume capability)
  const progress = loadProgress();
  const completedSet = new Set(progress.completedHandles.map(h => h.toLowerCase()));
  const followingMap = progress.followingMap; // handle -> [list of handles they follow that are in our set]

  const remaining = handles.filter(h => !completedSet.has(h.toLowerCase()));
  console.log(`Already completed: ${progress.completedHandles.length}`);
  console.log(`Remaining: ${remaining.length}\n`);

  let apiCalls = 0;

  for (let i = 0; i < remaining.length; i++) {
    const handle = remaining[i];
    console.log(`[${progress.completedHandles.length + i + 1}/${handles.length}] Fetching who @${handle} follows...`);

    const following = await getFollowings(handle);
    apiCalls++;

    // Filter to only people in our 300-node set
    const relevantFollows = [];
    for (const user of following) {
      if (!user || !user.screen_name) continue;
      const screenName = user.screen_name.toLowerCase();
      if (handleSet.has(screenName) && screenName !== handle.toLowerCase()) {
        relevantFollows.push(screenName);
      }
    }

    console.log(`  → follows ${relevantFollows.length} people in our network (out of ${following.length} total)`);

    followingMap[handle.toLowerCase()] = relevantFollows;
    progress.completedHandles.push(handle);
    progress.followingMap = followingMap;

    // Save progress every 5 calls
    if (apiCalls % 5 === 0) {
      saveProgress(progress);
      console.log(`  [Progress saved - ${apiCalls} API calls so far]\n`);
    }
  }

  // Final save
  saveProgress(progress);
  console.log(`\nCrawling complete! ${apiCalls} API calls made.\n`);

  // Generate links
  console.log('Generating links...');
  const linkSet = new Set();

  for (const [source, targets] of Object.entries(followingMap)) {
    for (const target of targets) {
      // source follows target
      const key = `${source}|${target}`;
      linkSet.add(key);
    }
  }

  const links = Array.from(linkSet).map(str => {
    const [source, target] = str.split('|');
    return { source, target };
  });

  console.log(`Generated ${links.length} links (was 443 before)\n`);

  // Rebuild constants.ts with new links but same nodes
  console.log('Updating constants.ts with new links...');

  // Parse the existing LAST_UPDATED or generate new one
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const newConstantsContent = `import { GraphData } from "./types";

// Links updated on ${now.toISOString().split('T')[0]} - full cross-profile crawl
// Top 300 AI Influencers ranked by: log₁₀(followers) × seed_connections
// Minimum followers: 1,000 | AI-relevance filter: enabled

export const LAST_UPDATED = "${formattedDate}";

export const INITIAL_DATA: GraphData = {
  nodes: ${JSON.stringify(nodesArray, null, 4)},
  links: ${JSON.stringify(links, null, 4)}
};
`;

  fs.writeFileSync(constantsPath, newConstantsContent);
  console.log(`Written to ${constantsPath}\n`);

  // Clean up progress file
  fs.unlinkSync(PROGRESS_FILE);
  console.log('Cleaned up progress file.');

  console.log('\n=== Complete! ===');
  console.log(`Total API calls this run: ${apiCalls}`);
  console.log(`Total links: ${links.length}`);
}

main().catch(console.error);
