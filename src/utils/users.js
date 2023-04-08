const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim();
  room = room.trim();

  if (!username || !room) {
    return {
      error: '닉네임과 그룹명을 작성해주세요',
    };
  }

  const isUser = users.find((user) => {
    return user.room == room && user.username == username;
  });

  if (isUser) {
    return {
      error: '해당 닉네임이 이미 존재합니다',
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

const getUserInRoom = (room) => {
  //console.log(users, room);
  const newUsers = users.filter((user) => {
    return user.room == room;
  });
  console.log('현재 방 정보: ', newUsers);
  return newUsers;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports = {
  addUser,
  getUser,
  getUserInRoom,
  removeUser,
};
