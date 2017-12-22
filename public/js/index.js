var socket = io();

// socket.on('connect', () => { //arrow functions no bueno!
socket.on('connect', function () {
  console.log('Connected to server');
});

socket.emit('createMessage', {
  from: "jen@example.com",
  text: "This is your dog. What up?"
})

socket.on('disconnect', function () {
  console.log('Disconnected from server!');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
