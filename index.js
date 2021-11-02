const express = require('express');

const app = express();
const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

let buyNamspace = io.of('/buy');
buyNamspace.on('connection', (socket) => {
    buyNamspace.emit('myEvent', 'Hello buyer')
})

let sellNamspace = io.of('/sell');
sellNamspace.on('connection', (socket) => {
    sellNamspace.emit('myEvent', 'Hello seller')
})

// io.on('connection', (socket) => {
//     console.log('New user connected!');




//     // io.sockets.emit('myBroadcast', 'Hello everyone') // Message send all user
//     // socket.on('message', (msg) => {console.log(msg)}) //recive data from browser

//     // setTimeout(() => {
//     //     socket.send('Learn with rabbil hasan (Data server to browser)'); // send data to browser
//     // }, 10000);

//     // setInterval(() => {
//     //     let date = new Date();
//     //     let time = date.getTime();
//     //     socket.emit('myEvent', time);
//     // }, 10);
//     socket.on('disconnect', () => {
//         console.log('User Disconnected!');
//     })
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

expressServer.listen(5000, () => console.log('Server Running'));