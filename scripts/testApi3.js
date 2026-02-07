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
    console.log('Response:', JSON.stringify(data, null, 2).slice(0, 1500));
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('---\n');
}

async function main() {
  // First get user ID for sama
  console.log('=== Getting user ID first ===\n');
  const userUrl = new URL(`https://${RAPIDAPI_HOST}/user`);
  userUrl.searchParams.append('username', 'sama');

  const userResponse = await fetch(userUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  });
  const userData = await userResponse.json();
  console.log('User data keys:', JSON.stringify(userData, null, 2).slice(0, 2000));

  // Extract rest_id (Twitter user ID)
  const userId = userData?.result?.data?.user?.result?.rest_id;
  console.log(`\nUser ID for @sama: ${userId}\n`);

  console.log('=== Testing followers endpoint with different params ===\n');

  // Test with user_id
  await testEndpoint('/followers', { user_id: userId });
  await testEndpoint('/followers', { id: userId });
  await testEndpoint('/followers', { user: userId });

  // Test following variations
  await testEndpoint('/following', { user_id: userId });
  await testEndpoint('/followings', { user_id: userId });
  await testEndpoint('/friends/ids', { user_id: userId });
}

main();
