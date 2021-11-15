const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'});
    if(request.url=='/'){
        response.write('<h1>Seja bem vindo</h1>');
    }else if(request.url=='/canal'){
        response.write('<h1>Cursos em Geral</h1>');
    }else if(request.url=='/cursos'){
        response.write('<h1>Curso de NodeJS</h1>');
    }
    response.end()
})

servidor.listen(porta,host,()=>{console.log('Servidor está sendo executado')});