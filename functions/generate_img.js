export async function onRequest(context) {
    const response = await fetch("https://ai.allenz.fun");
    const data = await response.json();
    
    return new Response(response, {
        headers: {
          'content-type': 'image/png',
        },
      });
  }
  