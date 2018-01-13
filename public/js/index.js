var socket = io();

socket.on('connect', function() {
    console.log("connected to server");

    socket.emit('createMessage', {
        from: 'jen@example.com',
        text: 'Hey hows it going'
    });
});

socket.on('disconnect', function() {
    console.log("disconnected from server");
});

socket.on('newMessage', function(message) {
    console.log("New Email", message);
});

