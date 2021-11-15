( async ()=>{
    const db = require('./db')
    
    // console.log('Inserir novo cliente')
    // varCod = 3
    // varNome = 'luliz'
    // await db.insereClientes({codigo: varCod, nome: varNome})

    // console.log('Atualizando clientes')
    // const varNome = 'LulizTwitch'
    // const varCod = 3
    // await db.atualizaClientes({nome: varNome, codigo: varCod})
    
    console.log('Deletando clientes')
    const varCod = 3
    await db.deleteClientes({codigo: varCod})

    console.log('Selecionar todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
