require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

// Use API key from .env
const apiKey = process.env.OPENROUTER_API_KEY;

app.listen(3000, () => {
  if (apiKey) {
    console.log('Server running on port 3000');
    console.log('Environment variables: API key is set');
  } else {
    console.log('Server running on port 3000');
    console.log('Environment variables: API key is NOT set');
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    // Debug: Log API key (partially), headers, and payload
    console.log('Using API key:', apiKey ? apiKey.slice(0, 12) + '...' : 'NOT SET');
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    console.log('Headers sent to OpenRouter:', headers);

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
    console.log('Payload sent to OpenRouter:', payload);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenRouter API error:', data);
      return res.status(response.status).json({ error: 'OpenRouter API error', details: data.error || data });
    }

    // Return only the assistant's reply as 'response'
    res.json({ response: data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request." });
  } catch (error) {
    console.error('Error in chat API:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});