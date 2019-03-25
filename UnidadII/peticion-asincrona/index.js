var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
app.use(express.static('public')); //middlewares

//Midleware para poblar el JSON req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/procesar',function(req, res){
    //res.send(`El servidor recibio la información ${req.query.nombre}`);
    res.send(JSON.stringify(req.query)); //Información que fue enviada con GET
});

app.post('/procesar',function(req, res){
    //res.send(`Nombre: ${req.body.nombre}`);
    //setInterval(function(){
        res.send(JSON.stringify(req.body)); //Información que fue enviada con POST
    //},10000);
});

app.listen(3334, function(){
    console.log("Servidor iniciado");
});