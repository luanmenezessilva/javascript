const express = require('express')
const app = express()
const porta = process.env.PORT


app.get('/', (request, response)=>{
    response.send('Seja bem vindo');    
})

app.get('/canal', (request, response)=>{
    response.json({canal: 'Curso NodeJS'});
})


app.listen(porta || 3000, ()=>{console.log('Servidor está sendo executado!')})