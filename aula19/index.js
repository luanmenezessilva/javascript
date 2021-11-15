const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://lmsilva:lmsilva@cluster0.qfkdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const colecao = 'cursos'

    let query = {curso: 'Curso de Javascript 2021'}
    let novoObj = {$set:{curso: 'Curso de Javascript 2022'}}
    dbo.collection(colecao).updateOne(query, novoObj, async (erro,resultado)=>{
        if(erro)throw erro
        await console.log("1 curso atualizado")
        // banco.close()
    })

    query = {}
    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})