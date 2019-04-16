var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({secret:"ASDFSDF$%%aasdera", resave: true, saveUninitialized:true}));

//Las variables de session generan una cookie con una llave unica generada
//por la cadena enviada en secret, para identificar a que cliente le pertenecen
//las variables de sesion.

app.get('/guardar-sesion/:mensaje',function(req, res){
    req.session.mensaje = req.params.mensaje;
    res.send("Se guardo la variable de sesion");
});

app.get('/obtener-sesion',function(req, res){
    res.send("Sesion guardada: " + req.session.mensaje);
});

app.get('/destruir-sesion',function(req,res){
    req.session.destroy();
    res.send("Session eliminada");
});

app.listen(3334, function(){
    console.log("Servidor iniciado");
});