const urlParams = new URL(location.href).searchParams;
const names = urlParams.get('username');

const socket = io();
const $userMsg = document.querySelector('#userMsg');
const $chatMsgdisplay = document.querySelector('.chat_main');
const $msg = $userMsg.querySelector('input');
const $submitMsg = $userMsg.querySelector('button');
const $messages = document.querySelector('#messages');
const username = urlParams.get('username');
const room = urlParams.get('room');

const nowTime = () => {
  let now = new Date();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dayofWeek = week[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

  return month + '월 ' + date + '일, ' + dayofWeek + ' , ' + hour + 'H ' + minutes + 'M';
};

socket.on('message', (msg) => {
  console.log('message : ', msg);

  let html = `
    <div class="message">
        <p>
          <span class="message_name">${msg.username}</span>
          <span class="message_meta">${nowTime()}</span>
        </p>
        <p>${msg.message}</p>
      </div>
  `;
  if (msg.username == names) {
    html = `
    <div class="message" style = "text-align : center">
        <p style = "text-align : right">
          <span class="message_name" >${msg.username}</span>
          <span class="message_meta">${nowTime()}</span>
        </p>
        <p style = "text-align : right">${msg.message}</p>
      </div>
  `;
  }
  $messages.insertAdjacentHTML('beforeend', html);
  window.scrollTo({ top: $messages.scrollHeight, behavior: 'smooth' });
});

socket.on('info', ({ room, users }) => {
  let userList = '';
  users.forEach((user) => {
    userList += `<li><i class="fa fa-commenting-o" aria-hidden="true"></i>&nbsp;${user.username}</li>`;
  });
  const html =
    `
    <h2 class="room-title"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;${room}</h2>
    <h3 class="list-title">Users</h3>
    <ul class="users">` +
    userList +
    `</ul>`;

  document.querySelector('#sideArea').innerHTML = html;
});

socket.emit('join', { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = '/';
  }
});

$userMsg.addEventListener('submit', (e) => {
  e.preventDefault();
  $submitMsg.setAttribute('disabled', '');
  let msg = document.querySelector('input').value;

  socket.emit('sendMessage', msg, (error) => {
    $submitMsg.removeAttribute('disabled');
    $msg.value = '';
    $msg.focus();
    if (error) {
      return console.log(error);
    }
    console.log('메시지 전송 성공');
  });
});
