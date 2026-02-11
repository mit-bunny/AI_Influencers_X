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

// Get full user profile by username
async function getFullProfile(username) {
  try {
    const data = await apiCall('/screenname.php', { screenname: username });
    await delay(1000); // 1 second delay to avoid rate limits
    return data;
  } catch (error) {
    console.error(`  Error fetching @${username}:`, error.message);
    return null;
  }
}

// Categorize based on bio
function categorizeUser(description, name) {
  const bio = (description || '').toLowerCase();
  const lowerName = (name || '').toLowerCase();

  if (bio.includes('official') || bio.includes('company') || bio.includes('lab') ||
      bio.includes('inc.') || bio.includes('we build') || bio.includes('our mission') ||
      (lowerName.includes('ai') && !lowerName.includes(' '))) {
    return 'company';
  }

  if (bio.includes('investor') || bio.includes('venture') || bio.includes(' vc') ||
      bio.includes('partner at') || bio.includes('fund') || bio.includes('capital')) {
    return 'investor';
  }

  if (bio.includes('journalist') || bio.includes('reporter') || bio.includes('editor') ||
      bio.includes('writer at') || bio.includes('newsletter') || bio.includes('podcast')) {
    return 'media';
  }

  if (bio.includes('professor') || bio.includes('phd') || bio.includes('researcher') ||
      bio.includes('university') || bio.includes('research scientist') || bio.includes('postdoc')) {
    return 'researcher';
  }

  if (bio.includes('founder') || bio.includes('ceo') || bio.includes('co-founder') ||
      bio.includes('building') || bio.includes('cofounder')) {
    return 'founder';
  }

  return 'founder';
}

// Load curated roles/categories for manual overrides
let CURATED_OVERRIDES = {};
try {
  const overridesPath = path.join(__dirname, 'curatedOverrides.json');
  if (fs.existsSync(overridesPath)) {
    CURATED_OVERRIDES = JSON.parse(fs.readFileSync(overridesPath, 'utf-8'));
  }
} catch (e) {
  console.log('Note: curatedOverrides.json not found, using auto-detection only');
}

// Extract role from bio
function extractRole(bio, name, username) {
  if (!bio) return '';

  const lowerBio = bio.toLowerCase();

  const titles = [];
  if (lowerBio.includes('co-founder') || lowerBio.includes('cofounder')) titles.push('Co-founder');
  else if (lowerBio.includes('founder')) titles.push('Founder');
  if (lowerBio.includes('ceo')) titles.push('CEO');
  if (lowerBio.includes('cto')) titles.push('CTO');
  if (lowerBio.includes('professor')) titles.push('Professor');
  if (lowerBio.includes('research scientist')) titles.push('Research Scientist');
  else if (lowerBio.includes('researcher')) titles.push('Researcher');

  const orgPatterns = [
    /\b(OpenAI|Anthropic|Google|DeepMind|Meta|NVIDIA|Microsoft|HuggingFace|Mistral|Cohere|Tesla|SpaceX|You\.com|Salesforce)\b/gi,
    /\b(Stanford|MIT|Berkeley|CMU|Harvard|Oxford|Cambridge|Princeton|Yale|Cornell)\b/gi,
  ];

  const orgs = [];
  for (const pattern of orgPatterns) {
    const matches = bio.match(pattern);
    if (matches) {
      matches.forEach(m => {
        const cleaned = m.trim();
        if (!orgs.includes(cleaned)) orgs.push(cleaned);
      });
    }
  }

  if (titles.length > 0 && orgs.length > 0) {
    return `${titles.slice(0, 2).join(' & ')} at ${orgs[0]}`;
  } else if (titles.length > 0) {
    return titles.slice(0, 2).join(' & ');
  } else if (orgs.length > 0) {
    return orgs[0];
  }

  const firstPart = bio.split(/[|.]/)[0].trim();
  if (firstPart.length <= 50 && firstPart.length >= 10) {
    return firstPart;
  }

  return '';
}

// Extract bio tags
function extractBioTags(bio) {
  const tags = [];
  const lowerBio = (bio || '').toLowerCase();

  const keywords = [
    ['llm', 'LLMs'], ['gpt', 'GPT'], ['agi', 'AGI'], ['nlp', 'NLP'],
    ['robotics', 'Robotics'], ['computer vision', 'Vision'],
    ['deep learning', 'Deep Learning'], ['neural', 'Neural Networks'],
    ['transformer', 'Transformers'], ['diffusion', 'Diffusion'],
    ['safety', 'AI Safety'], ['alignment', 'Alignment'],
    ['open source', 'Open Source'], ['research', 'Research'],
    ['startup', 'Startup'], ['founder', 'Founder'],
    ['investor', 'Investor'], ['professor', 'Professor'],
  ];

  keywords.forEach(([search, display]) => {
    if (lowerBio.includes(search)) tags.push(display);
  });

  return [...new Set(tags)].slice(0, 4);
}

async function main() {
  console.log('=== Fetching Full Profiles ===\n');

  // Load existing constants.ts to get the list of handles
  const constantsPath = path.join(__dirname, '..', 'constants.ts');
  const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

  // Extract current nodes from constants.ts
  const nodesMatch = constantsContent.match(/nodes:\s*(\[[\s\S]*?\])\s*,\s*links:/);
  if (!nodesMatch) {
    console.error('Could not parse nodes from constants.ts');
    process.exit(1);
  }

  const currentNodes = JSON.parse(nodesMatch[1]);
  console.log(`Found ${currentNodes.length} profiles to update\n`);

  // Also extract current links
  const linksMatch = constantsContent.match(/links:\s*(\[[\s\S]*?\])\s*\n\};/);
  const currentLinks = linksMatch ? JSON.parse(linksMatch[1]) : [];

  const updatedProfiles = [];
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < currentNodes.length; i++) {
    const node = currentNodes[i];
    const handle = node.handle || node.id;

    console.log(`[${i + 1}/${currentNodes.length}] Fetching @${handle}...`);

    const profile = await getFullProfile(handle);

    if (profile && profile.status !== 'error') {
      // Apply manual overrides if available
      const overrides = CURATED_OVERRIDES[handle.toLowerCase()] || {};

      let joinedDate = '';
      if (profile.created_at) {
        try {
          const date = new Date(profile.created_at);
          joinedDate = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        } catch (e) {}
      }

      const description = profile.desc || '';

      updatedProfiles.push({
        id: (profile.profile || handle).toLowerCase(),
        name: profile.name || handle,
        group: overrides.group || categorizeUser(description, profile.name),
        role: overrides.role || extractRole(description, profile.name, handle),
        handle: profile.profile || handle,
        associated: overrides.associated || '',
        verified: profile.blue_verified ? 'blue' : undefined,
        joinedDate: joinedDate,
        bioTags: extractBioTags(description),
        bio: description.slice(0, 200),
        followers: profile.sub_count || 0,
        following: profile.friends || 0,
        location: profile.location || '',
        website: profile.website || '',
        imageUrl: profile.avatar?.replace('_normal', '_400x400') || '',
      });

      successCount++;
      console.log(`  ✓ ${profile.name} - ${(profile.sub_count || 0).toLocaleString()} followers`);
    } else {
      // Keep existing data if API fails
      updatedProfiles.push(node);
      errorCount++;
      console.log(`  ✗ Failed, keeping existing data`);
    }
  }

  console.log(`\n=== Profile Fetch Complete ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);

  // Sort by followers (for ranking display)
  updatedProfiles.sort((a, b) => (b.followers || 0) - (a.followers || 0));

  // Generate updated constants.ts
  console.log('\nGenerating constants.ts...');

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const newConstantsContent = `import { GraphData } from "./types";

// Auto-generated on ${now.toISOString().split('T')[0]}
// Top ${updatedProfiles.length} AI Influencers with full profile data
// Ranked by: log₁₀(followers) × seed_connections

export const LAST_UPDATED = "${formattedDate}";

export const INITIAL_DATA: GraphData = {
  nodes: ${JSON.stringify(updatedProfiles, null, 4)},
  links: ${JSON.stringify(currentLinks, null, 4)}
};
`;

  fs.writeFileSync(constantsPath, newConstantsContent);
  console.log(`Written to ${constantsPath}\n`);

  console.log('=== Done! ===');
  console.log(`Total API requests: ${currentNodes.length}`);
}

main().catch(console.error);
