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

window.onload = displayChatMessages;
