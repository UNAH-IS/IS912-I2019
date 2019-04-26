var express = require("express");
var bodyParser = require("body-parser");
var database = require("./modules/database");
var usuariosRouter = require('./routers/usuarios-router');
var mensajesRouter = require('./routers/mensajes-router');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/usuarios",usuariosRouter);
app.use("/mensajes",mensajesRouter);
app.use(express.static("public"));

app.listen(3335,function(){
    console.log("Servidor en linea");
});