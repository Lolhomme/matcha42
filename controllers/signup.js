let express = require('express');
let app =  express();
let bodyParser = require('body-parser');
let session = require('express-session');

app.post('/signup.ejs', (request, response) => {
    console.log(request.body.password);
/*Erreur type*/
if (request.body.inputEmail === undefined) {
    request.flash('error', "super erreur");
    response.redirect('/signup');
}
else {
    let User = require ('./models/users.js');
    User.create(request.body.inputUsername, function () {
        request.flash('success', "Congrats");
        response.redirect('/');
    })
}
});