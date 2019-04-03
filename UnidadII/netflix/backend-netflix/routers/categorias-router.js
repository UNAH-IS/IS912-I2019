var express = require("express");
var router = express.Router();
var categoria = require("../models/categoria");
var mongoose = require("mongoose");


//Obtener el listado de las categorias
router.get("/",function(req,res){
    categoria.find().sort({orden:1})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener una categoria en particular
router.get("/:id",function(req,res){
    res.send("Enviar detalle de la categoria: " + req.params.id);
});

//Agregar una categoria
router.post("/",function(req,res){
    res.send("Guardar una nueva categoria");
});

//Para actualizar una categoria
router.put("/:id",function(req,res){
    res.send("Actualizar la categoria con código: " + req.params.id);
});

//eliminar una categoria
router.delete("/:id",function(req,res){
    res.send("Eliminar la categoria con código: " + req.params.id);
});

module.exports = router;