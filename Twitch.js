const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/chat-messages', async (req, res) => {
    try {
        const clientId = process.env.Client_ID; // Access client ID from environment variable
        const response = await fetch('https://api.twitch.tv/helix/some_endpoint', {
            headers: {
                'Client-ID': clientId,
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // If required
            }
        });
        const data = await response.json();
        res.json(data); // Return chat messages as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
