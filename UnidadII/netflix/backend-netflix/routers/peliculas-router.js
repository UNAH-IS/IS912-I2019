var express = require("express");
var router = express.Router();
var pelicula = require("../models/pelicula");

//Obtener el listado de todas las peliculas
router.get("/",function(req,res){
    pelicula.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener una pelicula en particular
router.get("/:id",function(req,res){
    pelicula.find({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Peticion para guardar una pelicula
router.post("/", function(req, res){
    var p = new pelicula({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            caratula:req.body.caratula,
            categoria: {
                    _id: req.body.categoria,
                    nombre: req.body.nombreCategoria
            },
            calificacion: req.body.calificacion,
            imagenes: req.body.imagenes,
            original: req.body.original
    });

    console.log(JSON.stringify({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        caratula:req.body.caratula,
        categoria: {
                _id: req.body.categoria,
                nombre: req.body.nombreCategoria
        },
        calificacion: req.body.calificacion,
        imagenes: req.body.imagenes,
        original: req.body.original
}));

    p.save()
    .then(obj=>{
        res.send(obj);
    })
    .catch(error=>{
        res.send(obj);
    });

});

//Peticion para actualizar un registro
router.put("/:id",function(req,res){
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
router.delete("/:id",function(req, res){
    pelicula.remove({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


module.exports = router;