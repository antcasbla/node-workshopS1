'use strict';
const http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bienvenidos al maravilloso mundo de node');
});

server.listen(3000, (err, response) => {
    console.log('servidor levantado en el puerto 3000');
});