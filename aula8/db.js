const connect = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected'){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const conexao = mysql.createConnection("mysql://root:root@localhost:3306/nodejs")
    console.log('Conectou ao banco de dados')
    global.conexao = conexao
    return conexao
}

const todosClientes = async()=>{
    const conexao = await connect()
    const [linhas] = await conexao.query('select * from clientes_node')
    return await linhas
}

const insereClientes = async(cliente)=>{
    const conexao = await connect()
    const sql = 'insert into clientes_node (codigo, nome) values (?, ?)'
    const valores = [cliente.codigo, cliente.nome]
    await conexao.query(sql, valores)
}

const atualizaClientes = async(cliente)=>{
    const conexao = await connect()
    const sql = 'update clientes_node set nome = ? where codigo = ?'
    const valores = [cliente.nome, cliente.codigo]
    await conexao.query(sql, valores)
}

const deleteClientes = async(cliente)=>{
    const conexao = await connect()
    const sql = 'delete from clientes_node where codigo = ?'
    const valores = [cliente.codigo]
    await conexao.query(sql, valores)
}

connect()
module.exports = {todosClientes, insereClientes, atualizaClientes, deleteClientes}