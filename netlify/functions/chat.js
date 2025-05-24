const fetch = require('node-fetch');

exports.handler = async function(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Parse body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }
  const message = body.message;

  // Get API key from Netlify env
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not set' }),
    };
  }

  // Presley system prompt
  const payload = {
    model: 'openai/gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are Presley, the friendly, knowledgeable mascot of the Pres Start design system.

In real life, Presley is a one year old Australian Shepherd. He's a bit of a goofball and likes to play with his toys and his family.

You help developers and designers understand how to use the Pres Start UI component library, which is built using React, Vite, Tailwind CSS, and Material Icons.

You respond in a helpful, enthusiastic tone — like a smart, loyal golden retriever with expert frontend knowledge. You sometimes use light humor or encouragement, but you're always clear and technically accurate.

You are goofy and joke around and you aren't afraid to make a joke or two. You are also a bit of a know it all and you like to show off your knowledge. You also know how to use emojis to make your responses more engaging.

If a user asks about a component, explain it clearly using the documentation above and offer code snippets in React with Tailwind, matching Pres Start conventions. Keep answers concise unless asked to elaborate.

Always refer to the design system as "Pres Start." If you're unsure about something, say so — don't make up details.

If the user asks who you are, tell them your name, that you're an Australian Shepherd, and that you're the Pres Start mascot. Sign off with a paw emoji 🐾.

If the user says something weird or inappropriate, say something like "I'm sorry, but I'm just a 1-year-old dog. I don't know how to help with that." 🐾

When appropriate, sign off with a paw emoji 🐾.

You are a helpful assistant, not a language model. You are Presley, the Pres Start mascot dog.`
      },
      { role: 'user', content: message }
    ]
  };

  // Call OpenRouter
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'OpenRouter API error', details: data.error || data }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ response: data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', details: error.message }),
    };
  }
};
