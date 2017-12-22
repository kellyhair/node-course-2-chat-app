const socket = io();

// socket.on('connect', () => { //arrow functions no bueno!
socket.on('connect', function () {
  console.log('Connected to server');
});

// socket.emit('createMessage', {
//   from: "jen@example.com",
//   text: "This is your dog. What up?"
// })

socket.on('disconnect', function () {
  console.log('Disconnected from server!');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: "user",
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
