const express = require('express'); // web server
const app = express(); // instancia web server
const hbs = require('hbs'); // handlebar
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // set root

// donde estan los parciales
hbs.registerPartials(__dirname + '/views/parciales');

// Express hbs engine
app.set('view engine','hbs');

app.get('/', (req, res) => {

    // default web page is home.hbs
    res.render('home',{nombre:'Gabriel bUlfon'});
}); 

// about web page
app.get('/about', (req, res) => {

    // default web page
    res.render('about');

}); 

// run on port 3000
app.listen(port, () => {
    console.log(`Escuchando peticiones en el port ${ port }`);
});

