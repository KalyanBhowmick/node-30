const res = require('express/lib/response');
var http = require('http');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/plain"});
    res.write("Hello World")
    console.log("server working");
    res.end('Server working success');
});

server.listen(port, host, (err) => {
    if (err) {
        return console.log('Error occurred: ', err);
    }

    console.log('Server is listening on' + host + ':' + port);
});
