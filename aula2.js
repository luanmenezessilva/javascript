const http = require('http');

http.createServer((request,response) => {
    response.writeHead(200,
        {'Content-Type': 'text/plain'
    });
    response.write('Curso NodeJS\nTeste de alteração');
    response.end();
}).listen(1337)