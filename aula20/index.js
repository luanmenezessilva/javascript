const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://lmsilva:lmsilva@cluster0.qfkdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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