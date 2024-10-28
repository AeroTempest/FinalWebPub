function displayMessages() {
    const messageList = document.getElementById('messageList');
    const messages = getContactMessages();

    messageList.innerHTML = '';

    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.innerHTML = `
            <h2>${message.name}</h2>
            <p>Email: ${message.email}</p>
            <p>Message: ${message.message}</p>
            <p>Date Sent: ${message.dateSent}</p>
        `;
        messageList.appendChild(messageItem);
    });
}

function filterMessages() {
    const searchInput = document.getElementById('searchMessages').value.toLowerCase();
    const messageList = document.getElementById('messageList');
    const messages = getContactMessages();

    messageList.innerHTML = '';

    messages.forEach(message => {
        if (message.message.toLowerCase().includes(searchInput) || message.name.toLowerCase().includes(searchInput)) {
            const messageItem = document.createElement('div');
            messageItem.innerHTML = `
                <h2>${message.name}</h2>
                <p>Email: ${message.email}</p>
                <p>Message: ${message.message}</p>
                <p>Date Sent: ${message.dateSent}</p>
            `;
            messageList.appendChild(messageItem);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayMessages();
    document.getElementById('searchMessages').addEventListener('input', filterMessages);
});
