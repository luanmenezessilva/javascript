const http = require('http')
const porta = process.env.PORT
const servidor = http.createServer((request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Curso NodeJS')
  response.end()
})
servidor.listen(porta,()=>{console.log('Servidor está executando')})