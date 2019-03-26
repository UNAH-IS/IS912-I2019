var express = require("express");
var bodyParser = require("body-parser");
var test = require("./modules/test");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.send(test.mensaje());
});
//Obtener el listado de todas las peliculas
app.get("/peliculas",function(req,res){
    res.send("Retornar todas las peliculas");
});

//Obtener una pelicula en particular
app.get("/peliculas/:id",function(req,res){
    res.send("SE enviara la informacion de la pelicula: " + req.params.id);
});

//Peticion para guardar una pelicula
app.post("/peliculas", function(req, res){
    res.send({
        resultado:"Se guardo la pelicula", 
        nombre: req.body.nombre,
        descripcion:req.body.descripcion});
});

//Peticion para actualizar un registro
app.put("/peliculas/:id",function(req,res){
    res.send({resultado:"Se actualizo la pelicula con codigo"+req.params.id});
});


//Peticion para eliminar un registro
app.delete("/peliculas/:id",function(req, res){
    res.send({resultado:"Se elimino el registro con codigo: " + req.params.id});
});
app.listen(3334);