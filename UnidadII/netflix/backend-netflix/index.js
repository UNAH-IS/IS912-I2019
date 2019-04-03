var express = require("express");
var bodyParser = require("body-parser");
var test = require("./modules/test");
var database = require("./modules/database");
var pelicula = require("./models/pelicula");
var categoriasRouter = require('./routers/categorias-router');
var cors = require('cors'); //Cross-Origin Resource Sharing (CORS), Intercambio de recursos de origen cruzado (CORS)
var app = express();


app.use(cors());
app.use("/categorias",categoriasRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, res){
    res.send(test.mensaje());
});
//Obtener el listado de todas las peliculas
app.get("/peliculas",function(req,res){
    pelicula.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener una pelicula en particular
app.get("/peliculas/:id",function(req,res){
    pelicula.find({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Peticion para guardar una pelicula
app.post("/peliculas", function(req, res){
    var p = new pelicula({
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            caratula:req.body.caratula,
            categoria : {
                    nombre : req.body.nombreCategoria,
                    orden : req.body.ordenCategoria
            },
            calificacion : req.body.calificacion,
            imagenes : []
    });

    p.save()
    .then(obj=>{
        res.send(obj);
    })
    .catch(error=>{
        res.send(obj);
    });

});

//Peticion para actualizar un registro
app.put("/peliculas/:id",function(req,res){
    pelicula.update(
        {_id:req.params.id},
        {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            caratula:req.body.caratula,
            categoria : {
                    nombre : req.body.nombreCategoria,
                    orden : req.body.ordenCategoria
            },
            calificacion : req.body.calificacion,
            imagenes : []
        }
    ).then(result=>{
        res.send(result);
    })
    .catch(error=>{
        res.send(error);
    });//El primero son los filtros, el segundo son los campos
});


//Peticion para eliminar un registro
app.delete("/peliculas/:id",function(req, res){
    pelicula.remove({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});
app.listen(3335,function(){
    console.log("Backend en linea");
});