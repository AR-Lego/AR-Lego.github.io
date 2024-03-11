const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

const clientId = process.env.Client_ID || process.env.CLIENT_ID; // Use CLIENT_ID secret if Client_ID is not found
const oauthToken = process.env.OAuth_token || process.env.OAUTH_TOKEN; // Use OAUTH_TOKEN secret if OAuth_token is not found


app.get('/chat-messages', async (req, res) => {
    try {
        const broadcasterId = '584708748';
        const numberOfMessages = 5;
        const url = `https://api.twitch.tv/helix/channels/chats?broadcaster_id=${broadcasterId}&first=${numberOfMessages}`;

        const response = await fetch(url, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${oauthToken}` // Use the access token from environment variables
            }
        });
        const data = await response.json();
        res.json(data); // Return chat messages as JSON
    } catch (error) {
        console.error('Error fetching chat messages from Twitch API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Function to fetch chat messages from the server
async function fetchChatMessages() {
    try {
        const response = await fetch('/chat-messages'); // Assuming your server is running on the same domain
        const data = await response.json();
        return data.messages.slice(0, 5); // Return the 5 most recent chat messages
    } catch (error) {
        console.error('Error fetching chat messages from server:', error);
        return [];
    }
}

// Function to display chat messages on the webpage
async function displayChatMessages() {
    try {
        const chatMessages = await fetchChatMessages();
        const chatContainer = document.getElementById('chat-container');
        
        chatMessages.forEach((message) => {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${message.username}: ${message.message}`;
            chatContainer.appendChild(messageElement);
        });
    } catch (error) {
        console.error('Error displaying chat messages:', error);
    }
}

// Call the function to display chat messages when the page loads
window.onload = displayChatMessages;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
