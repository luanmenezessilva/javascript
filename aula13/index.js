require('dotenv').config()
const mongodb = require('mongodb').MongoClient
const url = process.env.URL_MONGO

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const obj = {curso: 'Curso de Python', canal: 'Pessoal'}
    const colecao = 'cursos'    
    dbo.collection(colecao).insertOne(obj, (erro, resultado)=>{
        if(erro) throw erro
        console.log("1 novo curso inserido")
        banco.close()
    })
})