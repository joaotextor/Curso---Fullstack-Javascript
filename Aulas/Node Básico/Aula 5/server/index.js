const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    
    if (request.url === '/') {
        fs.readFile('../client/index.html', (error, content) => {
            response.end(content)
        })
    }

    if (request.url === '/teste') {
        response.end('OK, funcionou')
    }
})

server.listen(8080)
console.log('Servidor executando na porta 8080')