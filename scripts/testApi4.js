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
    const data = await response.json();
    console.log('Response:', JSON.stringify(data, null, 2).slice(0, 2000));
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('---\n');
}

async function main() {
  const userId = '1605'; // Sam Altman's ID

  console.log('=== Testing followings with user param ===\n');

  // Test with 'user' param
  await testEndpoint('/followings', { user: userId });

  // Also test count param
  await testEndpoint('/followings', { user: userId, count: '20' });
}

main();
