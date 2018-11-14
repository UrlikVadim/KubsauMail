const express = require('express');
const fs = require('fs');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config.json');




const app = express();
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/MyProfile', function(req, res) {
    res.download(__dirname + '/package.rar', "package.rar");

});
app.post('/SearchProfile', function(req, res) {
    res.sendFile(collection.find({ surname: req.body.surname, name: req.body.name, person: req.body.person, phone: req.body.phone }));
});
app.get('/mongo', function(req, res) {

});



app.listen(config.porthttp, config.url, function() {
    console.log(config);
    console.log("server is starting");
});