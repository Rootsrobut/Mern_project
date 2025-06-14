const express = require('express');
const dotenv =require('dotenv');
dotenv.config();
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Store connected users
const users = {};

io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);
  // Handle location updates from clients
  socket.on('send-location', (data) => {
    users[socket.id] = data;
    // Broadcast to all clients except the sender
    socket.broadcast.emit('update-location', {
      id: socket.id,
      ...data
    });
  });

  // Send existing users to new client
  socket.emit('initial-users', Object.keys(users).map(id => ({
    id,
    ...users[id]
  })));

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
    delete users[socket.id];
    // Notify all clients to remove this user's marker
    io.emit('remove-marker', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});