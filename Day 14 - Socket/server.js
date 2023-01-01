const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);
console.log('Server listening on port 3000');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function (socket) {
    socket.emit('welcome', { data : 'Welcome' });

    socket.on('new', function (data) {
        console.log('About upload quote');
        io.sockets.emit('next', { data : data })
    })
});