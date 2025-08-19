exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const response = await fetch('https://hooks.airtable.com/workflows/v1/genericWebhook/appBA9whpengm1H04/wflfEgJT6afZ4vGG4/wtrG5GXlt9ksvFSio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: event.body
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } else {
      throw new Error(`Airtable error: ${response.status}`);
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error.message 
      })
    };
  }
};