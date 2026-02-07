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
    console.log('Response:', JSON.stringify(data, null, 2).slice(0, 1000));
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Test various endpoint formats
async function main() {
  console.log('=== Testing API Endpoints ===\n');

  // Test user lookup endpoints
  await testEndpoint('/user', { username: 'elonmusk' });
  console.log('\n---\n');

  await testEndpoint('/user/details', { username: 'elonmusk' });
  console.log('\n---\n');

  await testEndpoint('/user-by-screen-name', { username: 'elonmusk' });
  console.log('\n---\n');

  await testEndpoint('/UserByScreenName', { username: 'elonmusk' });
  console.log('\n---\n');

  // Test with different parameter names
  await testEndpoint('/user', { screen_name: 'elonmusk' });
  console.log('\n---\n');

  // Test following endpoint variations
  await testEndpoint('/following', { username: 'elonmusk' });
  console.log('\n---\n');

  await testEndpoint('/user/following', { username: 'elonmusk' });
  console.log('\n---\n');

  await testEndpoint('/Following', { username: 'elonmusk' });
}

main();
