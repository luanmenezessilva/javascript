const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso': 'Node', 'info': 'Curso de Node'},
    {'curso': 'Python', 'info': 'Curso de Python'},
    {'curso': 'Raspberry', 'info': 'Curso Raspberry'},
]

rotas.get('/', (request, response)=>{
    response.json({ola: 'Seja bem vindo'})
})

rotas.get('/:cursoId', (request, response)=>{
    const curso = request.params.cursoId
    const cursoI = cursosInfo.find(i=>i.curso == curso)
    if(!cursoI){
        response.status(400).json(
            {erro: 'Curso não encontrado', cursoPesquisado:curso}
        )    
    } else {
        response.status(300).json(cursoI)
    }
})

module.exports = rotas