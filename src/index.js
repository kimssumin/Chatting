const path = require('path');
const http = require('http');
const express = require('express');
const socket_io = require('socket.io');
const { generatemsg } = require('./utils/messages');

const { addUser, getUser, getUserInRoom, removeUser } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socket_io(server);

const PORT = process.env.PORT || 3000;
const sdr = path.join(__dirname, '../public');

app.use(express.static(sdr));

io.on('connection', (socket) => {
  console.log('연결 성공');

  socket.on('join', ({ username, room }, errorFunc) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) {
      return errorFunc(error);
    }

    socket.join(user.room);
    socket.emit('message', generatemsg('Admin', `Welcome ${user.username}!`));
    socket.broadcast
      .to(user.room)
      .emit('message', generatemsg('Admin', `${user.username} 님이 채팅방에 입장하였습니다!`));

    io.to(user.room).emit('info', {
      room: user.room,
      users: getUserInRoom(user.room),
    });

    errorFunc();
  });

  socket.on('sendMessage', (msg, errorFunc) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', generatemsg(user.username, msg));
    errorFunc();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    console.log(user);
    if (user) {
      io.to(user.room).emit(
        'message',
        generatemsg(`Admin`, `${user.username} 님이 채팅방을 나갔습니다!`)
      );

      io.to(user.room).emit('info', {
        room: user.room,
        users: getUserInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => {
  console.log('server is running : ' + PORT);
});
