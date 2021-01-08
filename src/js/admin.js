window.onload = _ => {
  var socket = new WebSocket(`${window.location.origin}/api`);
  socket.on('message', console.log);
};