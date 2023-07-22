const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // Add CORS middleware

// Endpoint to generate apology
app.get('/apology', async (req, res) => {
  try {
    const { name, reason } = req.query;

    // Call ChatGPT API to generate apology message
    const apology = await generateApology(name, reason);

    res.send(apology);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Apology generation failed.' });
  }
});

// Function to generate apology using ChatGPT
async function generateApology(name, reason) {
  const chatGPTResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: `Write an apology to ${name} about ${reason}.` }
    ],
    temperature: 0.7
  }, {
    headers: {
      'Authorization': 'Bearer OPENAI_KEY',
      'Content-Type': 'application/json'
    }
  });

  const reply = chatGPTResponse.data.choices[0].message.content;
  return reply.replace('AI:', '').trim();
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

