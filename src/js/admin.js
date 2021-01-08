window.onload = _ => {
  var socket = new WebSocket(`wss://${window.location.host}/api`);
  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    console.log(data);
  };
};