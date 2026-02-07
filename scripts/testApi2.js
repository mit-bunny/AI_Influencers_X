import 'dotenv/config';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

async function testEndpoint(endpoint, params = {}) {
  const url = new URL(`https://${RAPIDAPI_HOST}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, value);
  });

  console.log(`Testing: ${url.toString()}`);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
    });

    console.log(`Status: ${response.status}`);
    if (response.status === 200) {
      const data = await response.json();
      console.log('Response keys:', Object.keys(data));
      console.log('Sample:', JSON.stringify(data, null, 2).slice(0, 500));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function main() {
  console.log('=== Testing More API Endpoints ===\n');

  // Common endpoint variations
  const endpoints = [
    '/user-following',
    '/user-followers',
    '/friends',
    '/friends/list',
    '/followers',
    '/followers/list',
    '/user/friends',
    '/user/followers',
    '/get-following',
    '/get-followers',
    '/user_following',
    '/user_followers',
    '/list-following',
    '/search',
    '/search/users',
  ];

  for (const endpoint of endpoints) {
    await testEndpoint(endpoint, { username: 'sama', count: '10' });
    console.log('---');
  }
}

main();
