
// Utility function to parse cookies
const parseCookies = (cookieString) => {
  return cookieString
    .split(';')
    .map(cookie => cookie.trim())
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
};

exports.handler = async (event, context) => {
  const { path, queryStringParameters, httpMethod, headers, body } = event;
  const basePath = '/.netlify/functions/apis'; // Adjust this based on your setup
  const apiPath = path.replace(basePath, '');
  const queryString = new URLSearchParams(queryStringParameters).toString();
  const fullUrl = `${apiPath}${queryString ? '?' + queryString : ''}`;
   // Get cookies from the headers
   const cookies = event.headers.cookie ? parseCookies(event.headers.cookie) : {};
   // Access specific cookies
   const token = cookies["2391-token"] || "ewogICJ0eXAiIDogIkpXVCIsCiAgImFsZyIgOiAiUlMyNTYiCn0.ewogICJkb21haW4iIDogIjIzOTEiLAogICJhcHBJZCIgOiAiMjM5IiwKICAiaXNzIiA6ICJidWlsZGluZ3NidC5zdGFnZS5ob25leXdlbGwuY29tIiwKICAianRpIiA6ICI1NjA2NjQzYS1hMmQ1LTRiMzAtYWU3Yi1mNjBiZWEzZjdjMDIiLAogICJzdWIiIDogIjhjNjA2NDE1LWI3NWEtNDNmNS1hMWM0LTkyMzY0OGQ5MTBkNSIsCiAgImlhdCIgOiAxNzIxODM2OTAwLAogICJleHAiIDogMTcyMTgzODcwMAp9.ODRrfYeXs6x9AdXFLSvBT0xvc5BGCrCrL4SspBTsOdANVRSPaTiyNIqCDYcrsUIcQ68lIstu6v5a7TbGbcteu9k0-Q-YcjLscCPjAYRcK1vQxam-sNIetv_aA0CkBcVD5AfovmvxJ5J-HW1ImqmY5qzb9rlM9TeqiXzFwq97ls5K69GDun9O2CcdOrM_FHcBF2G0e1Hg80wh3aAJGdYLwtpOWheIOI1CeVMVDLWn-P3jbx_8wFgwbT052aMw8e7Nn-7vs9OM5lWdQ3NGvSymsCHHU0TPOwQ_n4bnJDHJh2jsxA44zXvNeCuYEbx7y4Lb0TfenZf6RzSj8dI0sgzrpg";

  if (apiPath.includes("/pif/")) {
    if (httpMethod === 'OPTIONS') {
      // CORS Preflight
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: ''
      };
    } else {
      const targetURL = "https://qpublish-hbt.aws.aem.honeywell.com" + fullUrl;      
      const cookieVal = "2391-token=" + token;
      let requestData ; 
      if (typeof body === 'string') {
        try {
          requestData = JSON.parse(body);
        } catch (error) {
          console.error('Invalid JSON string:', body);
          requestData = {};
        }
      } else {
        requestData = body || {};
      }// Assuming the request body is JSON

      try {
        // Make an external API POST call
        const response = await fetch(targetURL, {
          method: httpMethod,
          headers: {
            'Authorization': "Bearer " + token,
            'Cookie': cookieVal
          },
          json: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Handle the response data
        console.log('Response data:', data);

        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(data)
        };

      } catch (error) {
        console.error('Fetch error:', error);
        return {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
        };
      }
    }
  } else {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Not Found' })
    };
  }
};