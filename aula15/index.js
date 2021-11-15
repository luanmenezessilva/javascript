const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://lmsilva:lmsilva@cluster0.qfkdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const obj = {curso: 'Curso de Python', canal: 'Pessoal'}
    const colecao = 'cursos'    

    // dbo.collection(colecao).insertOne(obj, (erro, resultado)=>{
    //     if(erro) throw erro
    //     console.log("1 novo curso inserido")
    //     banco.close()
    // })

    const query = {curso: /C./}
    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})