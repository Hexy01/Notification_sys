const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/notifications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Notification = mongoose.model('Notification', new mongoose.Schema({
  userId: String,
  title: String,
  message: String,
}));

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// API endpoint
app.get('/api/notifications/:userId', async (req, res) => {
  const notifications = await Notification.find({ userId: req.params.userId });
  res.json(notifications);
});
app.get('/', (req, res) => {
  res.send('Backend is running!');
});


// WebSocket
io.on('connection', (socket) => {
  console.log('User connected');

  setTimeout(() => {
    io.emit('notify-user123', {
      _id: Date.now().toString(),
      title: 'Hello!',
      message: 'This is your first real-time notification.',
    });
  }, 3000);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
