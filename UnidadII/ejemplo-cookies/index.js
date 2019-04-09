var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());//Llenar el json req.cookies
 
app.get('/guardar-cookie/:mensaje',function(req, res){
    res.cookie("mensaje", req.params.mensaje);
    res.send("Se guardo la cookie");
});

app.get('/obtener-cookie',function(req, res){
    res.send("Cookie guardada: " + req.cookies.mensaje);
});
app.listen(3334, function(){
    console.log("Servidor iniciado");
});