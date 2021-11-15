const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'});
    const p=url.parse(request.url,true).query;
    response.write('\n<br/>'+request.url);
    response.write('\n<br/>'+p.nome);
    response.write('\n<br/>'+p.curso);
    response.end()
})

servidor.listen(porta,host,()=>{console.log('Servidor está sendo executado')});