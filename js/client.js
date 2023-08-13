const socket = io('http://localhost:8000');

// Get DOM elements in respective js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

// Audio that will play on receiving messages
const audio = new Audio('ting.mp3');


// Function which will append event info to the container
const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    // Add audio element to DOM before appending message element
    const audioElement = document.createElement('audio');
    audioElement.src = 'ting.mp3';
    audioElement.autoplay = true;
    messageContainer.append(audioElement);
    messageContainer.append(messageElement);
    if (position == 'left') {
        audio.play();
    }
};

// Asking new user for his/her name 
const Name = prompt("Enter your name to join");
socket.emit('new-user-joined', Name);

// Displaying that someone has joined the group chat
socket.on('user-joined', Name => {
    append(`${Name} joined the chat`, 'right');
});

// How the message sent by someone should be received by others
socket.on('receive', data => {
    append(`${data.userName}: ${data.message}`, 'left');
});

// Displaying that a user is disconnected 
// socket.on('disconnectUser', ()=> {
//     alert('Disconnected from server!');
//     window.location ='mainpage.html';
// });

// Displaying that a user left the chat
socket.on('user-left', userName => {
    append(`${userName} left the chat`, 'right');
});

// if the form gets submitted, send server the message
form.addEventListener('submit' , e=>{
    // Prevent default behaviour of page refresh and reloading
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});