const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const servidor = http.createServer((request, response)=> {
    fs.readFile('aula5_site.html', (err, arquivo) =>{
        response.writeHead(200, {'Content-type': 'text/html'})
        response.write(arquivo)
        return response.end()
    })
})

servidor.listen(porta || 3000, ()=>{console.log('Servidor está sendo executado!')})