window.onload = _ => {
  var socket = new WebSocket(`wss://${window.location.host}/api`);
  socket.on('message', console.log);
};