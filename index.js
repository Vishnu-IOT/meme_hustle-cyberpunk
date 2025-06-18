 const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const memeRoutes = require('./routes/memes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/memes', memeRoutes);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('disconnect', () => console.log('Disconnected:', socket.id));
});

app.set('socketio', io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

