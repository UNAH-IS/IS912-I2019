var express = require("express");
var router = express.Router();
var usuario = require("../models/usuario");
var mongoose = require("mongoose");

//Obtener el listado de todas las usuarios
router.get("/",function(req,res){
    usuario.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener un usuario en particular
router.get("/:id",function(req,res){
    usuario.find({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

router.get("/:id/contactos",function(req,res){
    usuario.aggregate([
        {
            $lookup:{
                from:"usuarios",
                localField:"contactos", 
                foreignField:"_id",
                as:"contactos"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.id)
            }
        },
        { //Obtener solo el atributo de contactos
            $project:{contactos:1}
        }
    ])
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


module.exports = router;