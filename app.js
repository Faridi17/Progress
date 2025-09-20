const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// web ini buatan azka dan haikal

// Setup EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Progress',
    })
})

app.get('/javascript', (req,res) => {
    res.render('javascript', {
        layout: 'layouts/main-layout',
        title: 'JavaScript - Progress',
    })
})

app.get('/python', (req,res) => {
    res.render('python', {
        layout: 'layouts/main-layout',
        title: 'Python - Progress',
    })
})

app.get('/php', (req,res) => {
    res.render('php', {
        layout: 'layouts/main-layout',
        title: 'PHP - Progress',
    })
})

app.get('/java', (req,res) => {
    res.render('java', {
        layout: 'layouts/main-layout',
        title: 'Java - Progress',
    })
})

app.get('/cpp', (req,res) => {
    res.render('cpp', {
        layout: 'layouts/main-layout',
        title: 'C++ - Progress',
    })
})
app.use('/', (req,res) => {
    res.status(404)
    res.render('error', {
        layout: 'error',
        title: 'error'
    })
})

app.listen(port, () => {
    console.log(`Web Progress | listening at http://localhost:${port}`);
})
