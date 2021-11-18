require('dotenv').config()
const mongodb = require('mongodb').MongoClient
const url = process.env.URL_MONGO

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const colecao = 'cursos'

    const limite = 3
    const query = {}    
    dbo.collection(colecao).find(query,{projection:{_id:0}}).limit(limite).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})