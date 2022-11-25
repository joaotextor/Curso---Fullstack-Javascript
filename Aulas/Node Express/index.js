const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

const getRandInt = (num) => {
    return Math.floor(Math.random() * num)
}

//~ set template engine
app.set('view engine', 'ejs')

// //~ Define static files - Not needed if using template engine
// const staticFolder = path.join(__dirname, 'views')
// const expressStatic = express.static(staticFolder)
// app.use(expressStatic)

//~ Define public files
//* Short version. No need do declare multiple consts
app.use(express.static(path.join(__dirname, 'public')))

//~ Setup to get data from 'post' method using a form
app.use(express.urlencoded({ extended: true }))

//~ Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Digital Tech - Home'
    })
})

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos', {
        title: 'Digital Tech - Quem Somos'
    })
})

app.get('/contato', (req, res) => {
    res.render('contato', {
        title: 'Digital Tech - Contato'
    })
})

app.get('/posts', (req, res) => {
    const postList = fs.readFileSync('./store/posts.json')
    res.render('posts', {
        title: 'Digital Tech - Blog Posts',
        posts: JSON.parse(postList)
    })
})

app.get('/cadastro-posts', (req, res) => {
    const { c } = req.query
    res.render('cadastro-posts', {
        title: 'Digital Tech - Cadastrar Post',
        cadastrado: c,
    })
})

app.post('/salvar-post', (req, res) => {
    const { title, text } = req.body
    const posts = JSON.parse(fs.readFileSync('./store/posts.json'))
    posts.push({
        title,
        text,
        stars: getRandInt(5)
    })

    fs.writeFileSync('./store/posts.json', JSON.stringify(posts))
    res.redirect('/cadastro-posts?c=1')

})

app.get('/servicos', (req, res) => {
    res.render('servicos', {
        title: 'Digital Tech - Serviços'
    })
})

app.get('/produtos', (req, res) => {
    res.render('produtos', {
        title: 'Digital Tech - Produtos'
    })
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

