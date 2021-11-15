const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://lmsilva:lmsilva@cluster0.qfkdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco)=>{
    if (erro) throw erro;
    const dbo = banco.db('cursos')
    const colecao1 = 'cursos'
    const colecao2 = 'detalhesCursos'

    let query = {}    
    dbo.collection(colecao1).aggregate([
        {
            $lookup: {
                from:'detalhesCursos',
                localField: 'idcurso',
                foreignField: 'idcurso',
                as: 'Detalhes'
            }
        }
    ]).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(JSON.stringify(resultado))
        banco.close()
    })

})