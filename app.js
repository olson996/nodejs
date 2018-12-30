'use strict';

const express = require('express'), app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('index');
})

const server = app.listen(3000, function(){
    console.log(`server started on port: ${server.address().port}`)
});