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

// Function to fetch chat messages from the server
async function fetchChatMessages() {
    try {
        const response = await fetch('/chat-messages'); // Assuming your server is running on the same domain
        const data = await response.json();
        return data.messages.slice(0, 5); // Return the 5 most recent chat messages
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        return [];
    }
}

// Function to display chat messages on the webpage
async function displayChatMessages() {
    const chatMessages = await fetchChatMessages();
    const chatContainer = document.getElementById('chat-container');
    
    chatMessages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message.username}: ${message.message}`;
        chatContainer.appendChild(messageElement);
    });
}

// Call the function to display chat messages when the page loads
window.onload = displayChatMessages;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
