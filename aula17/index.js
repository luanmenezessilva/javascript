require('dotenv').config()
const mongodb = require('mongodb').MongoClient
const url = process.env.URL_MONGO

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const obj = {curso: 'Curso de Python', canal: 'Pessoal'}
    const colecao = 'cursos'    

    let query = {curso: 'Curso de JavaScript'}
    dbo.collection(colecao).deleteOne(query,(erro,resultado)=>{
        if(erro)throw erro
        console.log('1 curso deletado')
        // banco.close()
    })

    query = {}
    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})