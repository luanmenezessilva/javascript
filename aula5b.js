const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const servidor = http.createServer((request, response)=> {
    fs.appendFile('teste.txt', 'Curso de NodeJS',(err) =>{
        if(err)throw err
        console.log('Arquivo criado')
        response.end()
    })
})

servidor.listen(porta || 3000, ()=>{console.log('Servidor está sendo executado!')})