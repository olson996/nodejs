'use strict';

const express = require('express'), app = express();

app.set('views', 'view engine');
app.set('views', 'views');

app.use(express.static('static'));

app.get('/', function(req, res){
    res.send('server working !!');
})

const server = app.listen(3000, function(){
    console.log(`server started on port: ${server.address().port}`)
});