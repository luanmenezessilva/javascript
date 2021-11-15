const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://lmsilva:lmsilva@cluster0.qfkdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const colecao = 'cursos'    
    const obj = [
        {curso: 'Curso de Javascript', canal: 'Pessoal'},
        {curso: 'Curso de Javascript', canal: 'Pessoal'},
        {curso: 'Curso de Javascript', canal: 'Pessoal'}]

    dbo.collection(colecao).insertMany(obj, async (erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
        // banco.close()
    })

    let query = {curso: /C/}
    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

})