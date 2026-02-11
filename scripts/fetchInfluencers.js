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

// Seed accounts - prominent AI figures/companies to start the crawl
const SEED_ACCOUNTS = [
  'OpenAI',
  'AnthropicAI',
  'GoogleDeepMind',
  'xai',
  'MetaAI',
  'nvidia',
  'sama',           // Sam Altman
  'ylecun',         // Yann LeCun
  'karpathy',       // Andrej Karpathy
  'demishassabis',  // Demis Hassabis
  'satyanadella',   // Satya Nadella
  'JeffDean',       // Jeff Dean
  'ilyasut',        // Ilya Sutskever
  'DrJimFan',       // Jim Fan
  'fchollet',       // François Chollet
  'ClementDelangue',// Clement Delangue (HuggingFace)
  'hardmaru',       // David Ha
  'GaryMarcus',
  'jackclark',      // Jack Clark (Anthropic)
  'danielabraga',   // Daniela Braga
  'RichardSocher',
  'OriolVinyalsML', // Oriol Vinyals
  'huggingface',
  'MistralAI',
  'perplexity_ai',
];

// AI-relevance keywords - must have at least one in bio to be considered AI community
const AI_KEYWORDS = [
  // Core AI/ML terms
  'artificial intelligence', 'machine learning', ' ai ', ' ml ', 'deep learning',
  'neural network', 'nlp', 'natural language', 'computer vision',
  'llm', 'large language model', 'gpt', 'transformer', 'diffusion model',
  'agi', 'alignment', 'ai safety',
  // Technical roles & terms
  'research scientist', 'ml engineer', 'ai engineer', 'data scientist',
  'machine learning engineer', 'deep learning', 'reinforcement learning',
  'pytorch', 'tensorflow', 'keras', 'jax',
  'gpu', 'cuda', 'tpu',
  // Companies & labs
  'openai', 'anthropic', 'deepmind', 'google ai', 'meta ai', 'nvidia',
  'hugging face', 'huggingface', '@openai', '@anthropic', '@googledeepmind',
  'stability ai', 'midjourney', 'cohere', 'mistral',
  // Academia
  'professor', 'phd', ' lab', 'research', 'arxiv', 'neurips', 'icml', 'iclr', 'cvpr',
  'stanford', 'mit', 'berkeley', 'cmu', 'harvard', 'oxford', 'cambridge',
  // Specific AI terms
  'generative ai', 'gen ai', 'chatbot', 'copilot', 'llama', 'claude', 'gemini',
  'autonomous', 'robotics', 'robot',
  'open source ai', 'ai model', 'language model', 'foundation model',
  'fine-tuning', 'fine tuning', 'pretraining', 'pre-training',
  'inference', 'embeddings', 'vector', 'rag',
];

// Explicit blocklist for known non-AI community members
const BLOCKLIST = [
  // General science publications (not AI-specific)
  'nature', 'science', 'sciam', 'newscientist', 'physicstoday',
  'cellpress', 'plosbiology', 'pnas',
  'royalsociety', 'physicsworld', 'scientificamerican',
  // General tech media (not AI-focused)
  'wired', 'techcrunch', 'theverge', 'engadget',
  'mashable', 'cnet', 'zdnet', 'arstechnica',
  // General news outlets
  'nytimes', 'wsj', 'washingtonpost', 'bbcnews', 'cnn', 'reuters',
  'bloomberg', 'forbes', 'fortune', 'economist',
  // Celebrities & general tech figures (not AI-focused)
  'johncena', 'lilwayne', 'ivankatrump', 'pope', 'pontifex',
  'katyperry', 'justinbieber', 'taylorswift', 'kimkardashian',
  'kyliejenner', 'selenagomez', 'therock', 'kevinhart', 'mchammer',
];

// Check if a user is likely part of the AI community
function isAIRelevant(description, name, username) {
  const text = `${description || ''} ${name || ''}`.toLowerCase();
  const handle = (username || '').toLowerCase();

  // Check blocklist first
  for (const blocked of BLOCKLIST) {
    if (handle.includes(blocked) || text.includes(blocked)) {
      return false;
    }
  }

  // Check for AI-related keywords
  for (const keyword of AI_KEYWORDS) {
    if (text.includes(keyword)) {
      return true;
    }
  }

  return false;
}

// Rate limiting helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API call helper for Twitter API45
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

// Get user profile by username (Twitter API45 format)
async function getUserByUsername(username) {
  try {
    console.log(`  Fetching profile: @${username}`);
    const data = await apiCall('/screenname.php', { screenname: username });
    await delay(1000); // 1 second delay to avoid rate limits
    return data;
  } catch (error) {
    console.error(`  Error fetching @${username}:`, error.message);
    return null;
  }
}

// Get following list for a user by screenname (Twitter API45 format)
async function getFollowings(screenname) {
  try {
    const data = await apiCall('/following.php', { screenname });
    await delay(1000); // 1 second delay to avoid rate limits
    return data?.following || [];
  } catch (error) {
    console.error(`  Error fetching followings for @${screenname}:`, error.message);
    return [];
  }
}

// Extract user data from Twitter API45 profile response
function extractUserData(user) {
  if (!user || user.status === 'error') return null;

  return {
    id: user.rest_id || user.user_id,
    username: user.profile || user.screen_name,
    name: user.name || user.profile || user.screen_name,
    description: user.desc || user.description || '',
    followers_count: user.sub_count || user.followers_count || 0,
    following_count: user.friends || user.friends_count || 0,
    created_at: user.created_at,
    location: user.location || '',
    verified: user.blue_verified || false,
    website: user.website || '',
    profile_image: user.avatar || user.profile_image || '',
  };
}

// Categorize based on bio and role
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

// Load curated roles from JSON file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let CURATED_ROLES = {};
try {
  CURATED_ROLES = require('./curatedRoles.json');
} catch (e) {
  console.log('Note: curatedRoles.json not found, using auto-extraction only');
}

// Extract role from bio
function extractRole(bio, name, username) {
  const handle = (username || '').toLowerCase();
  if (CURATED_ROLES[handle]) {
    return CURATED_ROLES[handle];
  }

  if (!bio) return '';

  const lowerBio = bio.toLowerCase();

  // Extract titles
  const titles = [];
  if (lowerBio.includes('co-founder') || lowerBio.includes('cofounder')) titles.push('Co-founder');
  else if (lowerBio.includes('founder')) titles.push('Founder');
  if (lowerBio.includes('ceo')) titles.push('CEO');
  if (lowerBio.includes('cto')) titles.push('CTO');
  if (lowerBio.includes('professor')) titles.push('Professor');
  if (lowerBio.includes('research scientist')) titles.push('Research Scientist');
  else if (lowerBio.includes('researcher')) titles.push('Researcher');

  // Extract companies
  const orgPatterns = [
    /\b(OpenAI|Anthropic|Google|DeepMind|Meta|NVIDIA|Microsoft|HuggingFace|Mistral|Cohere|Tesla|SpaceX)\b/gi,
    /\b(Stanford|MIT|Berkeley|CMU|Harvard|Oxford|Cambridge)\b/gi,
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

// Format user data for our graph
function formatUserForGraph(userData) {
  if (!userData || !userData.username) return null;

  let joinedDate = '';
  if (userData.created_at) {
    try {
      const date = new Date(userData.created_at);
      joinedDate = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (e) {}
  }

  return {
    id: userData.username.toLowerCase(),
    name: userData.name || userData.username,
    group: categorizeUser(userData.description, userData.name),
    role: extractRole(userData.description, userData.name, userData.username),
    handle: userData.username,
    associated: '',
    verified: userData.verified ? 'blue' : undefined,
    joinedDate: joinedDate,
    bioTags: extractBioTags(userData.description),
    bio: (userData.description || '').slice(0, 200),
    followers: userData.followers_count || 0,
    following: userData.following_count || 0,
    location: userData.location || '',
    website: userData.website || '',
    imageUrl: userData.profile_image?.replace('_normal', '_400x400') || '',
  };
}

// NEW: Calculate ranking score using log(followers) × seeds formula
function calculateScore(followers, seedCount) {
  if (followers <= 0 || seedCount <= 0) return 0;
  return Math.log10(followers) * seedCount;
}

async function main() {
  console.log('=== AI Influencer Network Crawler ===\n');
  console.log('Using Twitter API45 via RapidAPI\n');

  const userScores = new Map(); // username -> { followers, followedBy, userData }

  // Step 1: Get profiles for seed accounts
  console.log('Step 1: Fetching seed account profiles...');
  const seedProfiles = [];

  for (const username of SEED_ACCOUNTS) {
    const user = await getUserByUsername(username);
    if (user && user.status !== 'error' && (user.rest_id || user.profile)) {
      const userData = extractUserData(user);
      if (userData && userData.username) {
        seedProfiles.push({ username: userData.username, userData });
        userScores.set(userData.username.toLowerCase(), {
          followers: userData.followers_count || 0,
          followedBy: new Set(),
          userData,
          isSeed: true
        });
      }
    }
  }
  console.log(`  Found ${seedProfiles.length} seed profiles\n`);

  // Step 2: Get following lists for each seed
  console.log('Step 2: Crawling following lists from seeds...');
  let requestCount = seedProfiles.length;

  for (const seed of seedProfiles) {
    console.log(`  Fetching who @${seed.username} follows...`);
    const following = await getFollowings(seed.username);
    requestCount++;

    for (const user of following) {
      if (!user || !user.screen_name) continue;

      const userData = extractUserData(user);
      if (!userData || !userData.username) continue;

      const handle = userData.username.toLowerCase();

      if (!userScores.has(handle)) {
        userScores.set(handle, {
          followers: userData.followers_count || 0,
          followedBy: new Set(),
          userData
        });
      }
      userScores.get(handle).followedBy.add(seed.username.toLowerCase());
    }
  }
  console.log(`  Discovered ${userScores.size} unique accounts (${requestCount} API requests used)\n`);

  // Step 3: Filter for AI-relevance and minimum followers
  console.log('Step 3: Filtering for AI community members...');
  const scoredUsers = [];
  let filteredOutCount = 0;
  let lowFollowerCount = 0;

  const MIN_FOLLOWERS = 1000; // Updated: 1K minimum as discussed

  for (const [username, data] of userScores) {
    const bio = data.userData?.description || '';
    const name = data.userData?.name || '';
    const followers = data.followers || 0;

    // Skip users who aren't AI-relevant (unless they're seeds)
    if (!data.isSeed && !isAIRelevant(bio, name, username)) {
      filteredOutCount++;
      continue;
    }

    // Skip accounts with too few followers (unless they're seeds)
    if (!data.isSeed && followers < MIN_FOLLOWERS) {
      lowFollowerCount++;
      continue;
    }

    const seedCount = data.followedBy.size;
    // For seeds not followed by other seeds, give them a base seed count of 1
    const effectiveSeedCount = data.isSeed ? Math.max(seedCount, 1) : seedCount;

    // NEW: Use log(followers) × seeds ranking formula
    const score = calculateScore(followers, effectiveSeedCount);

    scoredUsers.push({
      username,
      seedCount: effectiveSeedCount,
      followers: followers,
      score: score,
      isSeed: data.isSeed || false,
      userData: data.userData,
    });
  }

  console.log(`  Filtered out ${filteredOutCount} non-AI accounts`);
  console.log(`  Filtered out ${lowFollowerCount} accounts with < ${MIN_FOLLOWERS.toLocaleString()} followers`);
  console.log(`  ${scoredUsers.length} qualified AI influencers remaining`);

  // Sort by our new score (log(followers) × seeds)
  scoredUsers.sort((a, b) => b.score - a.score);

  console.log(`\nTop 20 by influence score (log₁₀(followers) × seeds):`);
  scoredUsers.slice(0, 20).forEach((u, i) => {
    console.log(`  ${i + 1}. @${u.username} - ${u.followers.toLocaleString()} followers, ${u.seedCount} seeds, score: ${u.score.toFixed(2)}`);
  });

  // Step 4: Take top 300 (can filter down later when fetching full profiles)
  console.log('\nStep 4: Selecting top 300 influencers...');
  const top300 = scoredUsers.slice(0, 300);
  const finalProfiles = [];

  for (const user of top300) {
    const formatted = formatUserForGraph(user.userData);
    if (formatted) {
      finalProfiles.push(formatted);
    }
  }

  console.log(`  Selected ${finalProfiles.length} profiles\n`);

  // Step 5: Generate links
  console.log('Step 5: Generating network links...');
  const links = [];
  const profileHandles = new Set(finalProfiles.map(p => p.id));

  for (const [username, data] of userScores) {
    if (!profileHandles.has(username)) continue;

    for (const follower of data.followedBy) {
      if (profileHandles.has(follower) && follower !== username) {
        links.push({
          source: follower,
          target: username,
        });
      }
    }
  }

  // Deduplicate
  const linkSet = new Set(links.map(l => `${l.source}|${l.target}`));
  const uniqueLinks = Array.from(linkSet).map(str => {
    const [source, target] = str.split('|');
    return { source, target };
  });

  console.log(`  Generated ${uniqueLinks.length} links\n`);

  // Step 6: Generate constants.ts
  console.log('Step 6: Generating constants.ts...');

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const constantsContent = `import { GraphData } from "./types";

// Auto-generated on ${now.toISOString().split('T')[0]}
// Top 300 AI Influencers ranked by: log₁₀(followers) × seed_connections
// Minimum followers: 1,000 | AI-relevance filter: enabled

export const LAST_UPDATED = "${formattedDate}";

export const INITIAL_DATA: GraphData = {
  nodes: ${JSON.stringify(finalProfiles, null, 4)},
  links: ${JSON.stringify(uniqueLinks, null, 4)}
};
`;

  const outputPath = path.join(__dirname, '..', 'constants.ts');
  fs.writeFileSync(outputPath, constantsContent);
  console.log(`  Written to ${outputPath}\n`);

  console.log('=== Complete! ===');
  console.log(`Total API requests: ~${requestCount}`);
  console.log(`Total influencers: ${finalProfiles.length}`);
  console.log(`Total connections: ${uniqueLinks.length}`);
  console.log(`\nRanking formula: log₁₀(followers) × seed_connections`);
}

main().catch(console.error);
