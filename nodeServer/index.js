// Node server which will handle socket io connections

const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const users =  {};


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:5500',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on('new-user-joined', (name) =>{
        // console.log(name +' has joined the chat');
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);

    });
    
    socket.on('send', (message) =>{
        socket.broadcast.emit('receive', {message: message, userName: users[socket.id]})
    });
    
    socket.on('disconnect', () => {
        const disconnectedUserName = users[socket.id];
        if (disconnectedUserName) {
            socket.broadcast.emit('user-left', disconnectedUserName);
            delete users[socket.id];
        }
    });
    
});  

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});