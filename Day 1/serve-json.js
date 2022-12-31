const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log('Port number : 3000');
    res.writeHead(200, { 'Content-Type' : 'application/json' });

    let json_response = {
        status : 200,
        message : 'successful',
        result : ['Happy', 'New', 'Year'],
        code  : 2023
    }

    console.log('Server running');
    res.end(JSON.stringify(json_response));
    
}).listen(3000);