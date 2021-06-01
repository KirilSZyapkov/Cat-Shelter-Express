const express = require('express');
const hds = require('express-handlebars');


module.exports = (app) => {
    app.engine('hbs', hds({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'));

    app.use(express.urlencoded({
        extended: true
    }))
}