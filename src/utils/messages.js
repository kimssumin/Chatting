const generatemsg = (username, message) => {
  return {
    username,
    message,
    time: new Date().getTime(),
  };
};

module.exports = {
  generatemsg,
};
