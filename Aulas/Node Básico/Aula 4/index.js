const fs = require('fs')

fs.readFile('./clientes.json', function(err, data) {
    if (err) {
        console.log("Ops, deu erro.", err)
    } else {
        console.log(JSON.parse(data))
    }
})