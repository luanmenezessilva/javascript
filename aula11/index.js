const http = require('http')
const eventos = require('events')
const eventoEmissor = new eventos.EventEmitter()

const final=()=>{console.log('Fim do processo')}

eventoEmissor.on('msg', ()=>{console.log('Curso de NodeJS')})
eventoEmissor.on('fim', final)

const porta = process.env.PORT || 3000
const retorno = ()=>{console.log('Servidor está executando')}
const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Curso NodeJS')
    eventoEmissor.emit('fim')
    response.end()
})

servidor.listen(porta,retorno)