const http = require('http')
const porta = process.env.PORT

const servidor = http.createServer((request, response)=> {
    response.statusCode = 200
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Curso NodeJS');
})

servidor.listen(porta || 3000, ()=>{console.log('Servidor está sendo executado!')})