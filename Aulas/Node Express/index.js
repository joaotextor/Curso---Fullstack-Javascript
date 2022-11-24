const express = require("express")
const path = require("path")
const app = express()

//~ set template engine
app.set('view engine', 'ejs')

// //~ Define static files - Not needed if using template engine
// const staticFolder = path.join(__dirname, 'views')
// const expressStatic = express.static(staticFolder)
// app.use(expressStatic)

//~ Define public files
//* Short version. No need do declare multiple consts
app.use(express.static(path.join(__dirname, 'public')))


//~ Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos')
})

app.get('/contato', (req, res) => {
    res.render('contato')
})

app.get('/servicos', (req, res) => {
    res.render('servicos')
})

app.get('/produtos', (req, res) => {
    res.render('produtos')
})

//! 404 error - not found
app.use((req, res) => { //middleware
    res.send(`Page '${req.url}' not found!`)
})

// Server initialize
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

