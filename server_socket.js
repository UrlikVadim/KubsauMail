var WebSocketServer = new require('ws');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
var clients = {};
const lol = 123;
const url = "mongodb://localhost:27017/";
mongoClient.connect(url, function(err, client) {

    const db = client.db("test");
    const collection = db.collection("users");
    var user = { name: "Tom" + Math.random(), age: Math.random() * 10 };
    collection.insertOne(user, function(err, result) {
        if (err) {
            return console.log(err);
        }
    });
    collection.find().toArray(function(err, results) {
        res.send(results);
    });

    client.close();
});


var webSocketServer = new WebSocketServer.Server({
    port: config.portsocket
});
webSocketServer.on('connection', function(ws) {

    var id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    ws.on('message', function(message) {
        console.log('получено сообщение ' + message);

        for (var key in clients) {
            clients[key].send(message);
        }
    });

    ws.on('close', function() {
        console.log('соединение закрыто ' + id);
        delete clients[id];
    });

});