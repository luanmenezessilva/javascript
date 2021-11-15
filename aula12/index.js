const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

const servidor = http.createServer((request, response)=>{
    if(request.url == '/envioDeArquivo'){
        const form = new formidavel.IncomingForm();
        form.parse(request, (erro, campos, arquivos)=>{
            const urlantiga = arquivos.filetoupload.path
            const urlnova = 'E:/Sources/javascript/aula12' + arquivos.filetoupload.name
            fs.rename(urlantiga, urlnova, (erro)=>{
                if (erro) throw erro
                response.write('Arquivo movido')
                response.end()
            })
        })
    } else {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        response.write('<input type="file" name="filetoupload"><br>')
        response.write('<input type="submit" value="Enviar">')
        response.write('</form>')    
        return response.end()
    }
})

servidor.listen(porta)