let express = require('express')
let app =  express()
let bodyParser = require('body-parser')
let session = require('express-session')

//Template
app.set('view engine', 'ejs')

//Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'loulou',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(require('./middlewares/flash.js'))

//Routes
app.get('/', (request, response) => {
    // console.log(request.session)
    response.render('pages/index')
})

app.post('/', (request, response) => {
    /*Erreur type*/
    if (request.body.password === undefined || request.body.password === ''){
    request.flash('error', "super erreur")
    response.redirect('/')
    }
})

app.listen(8080)