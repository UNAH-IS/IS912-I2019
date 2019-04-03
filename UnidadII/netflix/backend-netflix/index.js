var express = require("express");
var bodyParser = require("body-parser");
var test = require("./modules/test");
var database = require("./modules/database");
var categoriasRouter = require('./routers/categorias-router');
var peliculasRouter = require('./routers/peliculas-router');
var cors = require('cors'); //Cross-Origin Resource Sharing (CORS), Intercambio de recursos de origen cruzado (CORS)
var app = express();


app.use(cors());
app.use("/categorias",categoriasRouter);
app.use("/peliculas",peliculasRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, res){
    res.send(test.mensaje());
});

app.listen(3335,function(){
    console.log("Backend en linea");
});