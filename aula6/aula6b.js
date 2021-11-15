const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (request, response)=>{
  response.send('Seja bem vindo')
})

app.listen(porta,()=>{console.log('Servidor está sendo executado!')})