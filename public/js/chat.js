const socket = io();

const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');
const messagesList = document.getElementById('messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = {
        username: usernameInput.value,
        text: messageInput.value,
    };

    socket.emit('chatMessage', msg);

    messageInput.value = '';
    messageInput.focus();
});

socket.on('chatMessage', (msg) => {
    const li = document.createElement('li');
    li.textContent = `${msg.username}: ${msg.text}`;
    messagesList.appendChild(li);
});
