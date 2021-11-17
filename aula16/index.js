require('dotenv').config()
const mongodb = require('mongodb').MongoClient
const url = process.env.URL_MONGO
console.log(process.env.URL_MONGO)

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const obj = {curso: 'Curso de Python', canal: 'Pessoal'}
    const colecao = 'cursos'    

    const ordenacao = {curso:1}
    const query = {}
    dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})