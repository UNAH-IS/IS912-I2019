var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.send("Enviar lista de categorias");
});

router.get("/:id",function(req,res){
    res.send("Enviar detalle de la categoria: " + req.params.id);
});

router.post("/",function(req,res){
    res.send("Guardar una nueva categoria");
});

router.put("/:id",function(req,res){
    res.send("Actualizar la categoria con código: " + req.params.id);
});

router.delete("/:id",function(req,res){
    res.send("Eliminar la categoria con código: " + req.params.id);
});

module.exports = router;