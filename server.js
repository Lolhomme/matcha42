let express = require('express');
let app =  express();
let bodyParser = require('body-parser');
let session = require('express-session');

//Template
app.set('view engine', 'ejs');

//Middleware
app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'loulou',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(require('./middlewares/flash.js'));

//Routes
app.get('/', (request, response) => {
    response.render('pages/index');
});
app.get('/signup.ejs', (request, response) => {
    response.render('pages/signup');
});

app.post('/signup.ejs', (request, response) => {
    console.log(request.body);
/*Erreur type*/
if (request.body.email === undefined || request.body.email === '') {
    request.flash('error', "super erreur");
    response.redirect('/signup.ejs');
}
else if (request.body.email === 'anthonylaulom@gmail.com'){
    /*let User = require ('./models/users.js');
    User.create(request.body.username, function () {*/
        request.flash('success', "Congrats");
        response.redirect('/');
    // })
}
});

app.listen(8080);