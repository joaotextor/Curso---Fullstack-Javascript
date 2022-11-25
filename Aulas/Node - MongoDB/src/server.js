const express = require('express')
const path = require('path')
const db = require('./database')

const app = express()

db.connect()

//define template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//define public files
app.use(express.static(path.join(__dirname, 'public')))

//enable server to recognize data using 'post' (form)
app.use(express.urlencoded({ extended: true}))

//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})

//404 error
app.use((req, res) => {
    res.send('Página não encontrada!')
})

//initializar server

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

