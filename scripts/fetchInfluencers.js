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
  'OriolVinyalsML',// Oriol Vinyals
  'huggingface',
  'MistralAI',
  'perplexity_ai',
];

// AI-relevance keywords - must have at least one in bio to be considered AI community
// These are more specific to avoid false positives from generic terms
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

// Explicit blocklist for known non-AI community members who might slip through
const BLOCKLIST = [
  // Celebrities
  'johncena', 'john cena',
  'lilwayne', 'lil wayne',
  'ivankatrump', 'ivanka trump',
  'pope', 'pontifex',
  'katyperry', 'katy perry',
  'justinbieber', 'justin bieber',
  'taylorswift', 'taylor swift',
  'kimkardashian', 'kim kardashian',
  'kyliejenner', 'kylie jenner',
  'selenagomez', 'selena gomez',
  'therock', 'dwayne johnson',
  'kevinhart', 'kevin hart',
  'mchammer', 'mc hammer',
  // General science/media accounts (not AI-specific)
  'nature',
  'science',
  'newscientist',
  'sciam', 'scientific american',
  'wired',
  'techcrunch',
  'theverge',
  'engadget',
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

// Get user profile by username
async function getUserByUsername(username) {
  try {
    console.log(`  Fetching profile: @${username}`);
    const data = await apiCall('/user', { username });
    await delay(1000); // 1 second delay to avoid rate limits
    return data?.result?.data?.user?.result || null;
  } catch (error) {
    console.error(`  Error fetching @${username}:`, error.message);
    return null;
  }
}

// Get following list for a user by their ID
async function getFollowings(userId, count = 100) {
  try {
    const data = await apiCall('/followings', { user: userId, count: count.toString() });
    await delay(1000); // 1 second delay to avoid rate limits
    return data;
  } catch (error) {
    console.error(`  Error fetching followings for ID ${userId}:`, error.message);
    return null;
  }
}

// Extract user data from API response
function extractUserData(user) {
  if (!user) return null;

  const legacy = user.legacy || {};
  const core = user.core || {};

  return {
    id: user.rest_id,
    username: core.screen_name || legacy.screen_name,
    name: core.name || legacy.name,
    description: legacy.description || '',
    followers_count: legacy.followers_count || 0,
    following_count: legacy.friends_count || 0,
    created_at: core.created_at || legacy.created_at,
    location: legacy.location || '',
    verified: user.is_blue_verified || legacy.verified,
    website: legacy.entities?.url?.urls?.[0]?.expanded_url || '',
    profile_image: user.avatar?.image_url || legacy.profile_image_url_https,
  };
}

// Categorize based on bio and role
function categorizeUser(description, name) {
  const bio = (description || '').toLowerCase();
  const lowerName = (name || '').toLowerCase();

  // Check for company/organization indicators
  if (bio.includes('official') ||
      bio.includes('company') ||
      bio.includes('lab') ||
      bio.includes('inc.') ||
      bio.includes('research lab') ||
      bio.includes('we build') ||
      bio.includes('our mission') ||
      (lowerName.includes('ai') && !lowerName.includes(' '))) {
    return 'company';
  }

  // Check for investor
  if (bio.includes('investor') ||
      bio.includes('venture') ||
      bio.includes(' vc') ||
      bio.includes('partner at') ||
      bio.includes('fund') ||
      bio.includes('capital')) {
    return 'investor';
  }

  // Check for media
  if (bio.includes('journalist') ||
      bio.includes('reporter') ||
      bio.includes('editor') ||
      bio.includes('writer at') ||
      bio.includes('newsletter') ||
      bio.includes('podcast') ||
      bio.includes('correspondent')) {
    return 'media';
  }

  // Check for researcher/academia
  if (bio.includes('professor') ||
      bio.includes('phd') ||
      bio.includes('researcher') ||
      bio.includes('university') ||
      bio.includes('research scientist') ||
      bio.includes('academia') ||
      bio.includes('postdoc')) {
    return 'researcher';
  }

  // Check for founder/builder
  if (bio.includes('founder') ||
      bio.includes('ceo') ||
      bio.includes('co-founder') ||
      bio.includes('building') ||
      bio.includes('cofounder') ||
      bio.includes('built')) {
    return 'founder';
  }

  // Default to founder
  return 'founder';
}

// Load curated roles from JSON file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const CURATED_ROLES = require('./curatedRoles.json');

// Extract a detailed role/blurb from bio (e.g., "Co-founder and CEO of Coinbase")
function extractRole(bio, name, username) {
  // Check for curated role first
  const handle = (username || '').toLowerCase();
  if (CURATED_ROLES[handle]) {
    return CURATED_ROLES[handle];
  }

  if (!bio) return '';

  // Try to extract a complete role description using patterns
  const rolePatterns = [
    // "Co-founder and CEO of X", "Founder & CEO at X"
    /((?:co-?founder|founder)(?:\s*(?:and|&|,)\s*(?:ceo|cto|president|chairman))?(?:\s+(?:of|at|@)\s+)?@?[\w\s]+?)(?:[.|,]|$)/i,
    // "CEO of X", "CTO at X"
    /((?:ceo|cto|coo|cfo|president|chairman|chief\s+\w+\s+officer)(?:\s+(?:of|at|@)\s+)?@?[\w\s]+?)(?:[.|,]|$)/i,
    // "VP of Research at X", "Head of AI at X"
    /((?:vp|vice president|director|head)\s+(?:of\s+)?[\w\s]+?(?:\s+(?:at|@)\s+)?@?[\w\s]+?)(?:[.|,]|$)/i,
    // "Professor of X at Y", "Research Scientist at X"
    /((?:professor|research\s+scientist|researcher|scientist|engineer)(?:\s+(?:of|in|at|@)\s+)?[\w\s]+?)(?:[.|,]|$)/i,
    // "Partner at X", "Investor at X"
    /((?:partner|investor|managing\s+director|general\s+partner)(?:\s+(?:at|@)\s+)?@?[\w\s]+?)(?:[.|,]|$)/i,
  ];

  for (const pattern of rolePatterns) {
    const match = bio.match(pattern);
    if (match && match[1]) {
      let role = match[1].trim();
      // Clean up @ symbols and extra whitespace
      role = role.replace(/@/g, '').replace(/\s+/g, ' ').trim();
      // Capitalize first letter
      role = role.charAt(0).toUpperCase() + role.slice(1);
      // Limit length but try to keep it meaningful
      if (role.length <= 60 && role.length >= 5) {
        return role;
      }
    }
  }

  // Fallback: Try to build from components
  const lowerBio = bio.toLowerCase();

  // Extract all titles
  const titles = [];
  if (lowerBio.includes('co-founder') || lowerBio.includes('cofounder')) titles.push('Co-founder');
  if (lowerBio.includes('founder') && !lowerBio.includes('co-founder') && !lowerBio.includes('cofounder')) titles.push('Founder');
  if (lowerBio.includes('ceo') || lowerBio.includes('chief executive')) titles.push('CEO');
  if (lowerBio.includes('cto') || lowerBio.includes('chief technology')) titles.push('CTO');
  if (lowerBio.includes('vp ') || lowerBio.includes('vice president')) titles.push('VP');
  if (lowerBio.includes('professor')) titles.push('Professor');
  if (lowerBio.includes('research scientist')) titles.push('Research Scientist');
  else if (lowerBio.includes('researcher')) titles.push('Researcher');
  if (lowerBio.includes('partner at') || lowerBio.includes('general partner')) titles.push('Partner');

  // Extract company/org names
  const orgPatterns = [
    /@(OpenAI|Anthropic|Google|DeepMind|Meta|NVIDIA|Microsoft|HuggingFace|Mistral|Cohere|Stability|Tesla|SpaceX|Coinbase|Scale|Databricks|Perplexity)/gi,
    /\b(OpenAI|Anthropic|Google DeepMind|DeepMind|Meta AI|NVIDIA|Microsoft|Hugging Face|HuggingFace|Mistral AI|Cohere|Stability AI|Tesla|SpaceX|Coinbase|Scale AI|Databricks|Perplexity)\b/gi,
    /\b(Stanford|MIT|Berkeley|CMU|Carnegie Mellon|Harvard|Oxford|Cambridge|NYU|Princeton|Yale|Cornell)\b/gi,
  ];

  const orgs = [];
  for (const pattern of orgPatterns) {
    const matches = bio.match(pattern);
    if (matches) {
      matches.forEach(m => {
        const cleaned = m.replace('@', '').trim();
        if (!orgs.includes(cleaned)) orgs.push(cleaned);
      });
    }
  }

  // Build description
  if (titles.length > 0 && orgs.length > 0) {
    const titleStr = titles.slice(0, 2).join(' & ');
    return `${titleStr} at ${orgs[0]}`;
  } else if (titles.length > 0) {
    return titles.slice(0, 2).join(' & ');
  } else if (orgs.length > 0) {
    return orgs[0];
  }

  // Last fallback: first sentence/phrase if short enough
  const firstPart = bio.split(/[|.]/)[0].trim();
  if (firstPart.length <= 50 && firstPart.length >= 10 && !firstPart.includes('#')) {
    return firstPart;
  }

  return '';
}

// Extract bio tags from bio text
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
    ['engineer', 'Engineering'], ['ml', 'ML']
  ];

  keywords.forEach(([search, display]) => {
    if (lowerBio.includes(search)) {
      tags.push(display);
    }
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

async function main() {
  console.log('=== AI Influencer Network Crawler ===\n');

  const userScores = new Map(); // username -> { score, followedBy, userData }
  const userIds = new Map(); // username -> rest_id

  // Step 1: Get profiles and IDs for seed accounts
  console.log('Step 1: Fetching seed account profiles...');
  const seedProfiles = [];

  for (const username of SEED_ACCOUNTS) {
    const user = await getUserByUsername(username);
    if (user && user.rest_id) {
      const userData = extractUserData(user);
      if (userData && userData.username) {
        seedProfiles.push({ username: userData.username, id: user.rest_id, userData });
        userIds.set(userData.username.toLowerCase(), user.rest_id);
        userScores.set(userData.username.toLowerCase(), {
          score: userData.followers_count || 0,
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
    const following = await getFollowings(seed.id, 200);
    requestCount++;

    if (following?.result?.timeline?.instructions) {
      const entries = following.result.timeline.instructions
        .find(i => i.type === 'TimelineAddEntries')?.entries || [];

      for (const entry of entries) {
        const userResult = entry?.content?.itemContent?.user_results?.result;
        if (!userResult || userResult.__typename !== 'User') continue;

        const userData = extractUserData(userResult);
        if (!userData || !userData.username) continue;

        const handle = userData.username.toLowerCase();
        userIds.set(handle, userResult.rest_id);

        if (!userScores.has(handle)) {
          userScores.set(handle, {
            score: userData.followers_count || 0,
            followedBy: new Set(),
            userData
          });
        }
        userScores.get(handle).followedBy.add(seed.username.toLowerCase());
      }
    }
  }
  console.log(`  Discovered ${userScores.size} unique accounts (${requestCount} API requests used)\n`);

  // Step 3: Filter for AI-relevance and apply minimum follower threshold
  console.log('Step 3: Filtering for AI community members...');
  const scoredUsers = [];
  let filteredOutCount = 0;
  let lowFollowerCount = 0;

  const MIN_FOLLOWERS = 25000; // Minimum 25K followers to be considered an "influencer"

  for (const [username, data] of userScores) {
    const bio = data.userData?.description || '';
    const name = data.userData?.name || '';
    const followers = data.score || 0;

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

    const connectionScore = data.followedBy.size;

    scoredUsers.push({
      username,
      connectionScore,
      followers: followers,
      finalScore: followers, // Primary ranking by follower count
      isSeed: data.isSeed || false,
      userData: data.userData,
    });
  }

  console.log(`  Filtered out ${filteredOutCount} non-AI accounts`);
  console.log(`  Filtered out ${lowFollowerCount} accounts with < ${MIN_FOLLOWERS.toLocaleString()} followers`);
  console.log(`  ${scoredUsers.length} qualified AI influencers remaining`);

  // Sort by follower count (the true measure of influence)
  scoredUsers.sort((a, b) => b.followers - a.followers);

  console.log(`\nTop 20 by influence score:`);
  scoredUsers.slice(0, 20).forEach((u, i) => {
    console.log(`  ${i + 1}. @${u.username} - ${u.followers.toLocaleString()} followers, connected to ${u.connectionScore} seeds`);
  });

  // Step 4: Take top 100
  console.log('\nStep 4: Selecting top 100 influencers...');
  const top100 = scoredUsers.slice(0, 100);
  const finalProfiles = [];

  for (const user of top100) {
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

  const constantsContent = `import { GraphData } from "./types";

// Auto-generated on ${new Date().toISOString().split('T')[0]}
// Top 100 AI Influencers based on follower count + network connectivity

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
}

main().catch(console.error);
