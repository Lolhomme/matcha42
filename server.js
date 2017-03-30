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
    saveUnitialized: true,
    cookie: { secure: false }
}))

//Routes
app.get('/', (request, response) => {
    if (request.session.error) {
    response.locals.error = request.session.error
    request.session.render = undifined
}
    response.render('pages/index')
})

app.post('/', (request, response) => {
    // if (request.body.message === undefined || request.body.message === '') {
        request.session.error = 'erreur'
        response.redirect('/')
// }
})

app.listen(8080)