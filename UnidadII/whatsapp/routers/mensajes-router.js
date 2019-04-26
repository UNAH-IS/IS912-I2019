var express = require("express");
var router = express.Router();
var mensaje = require("../models/mensaje");
var mongoose = require("mongoose");

router.get("/",function(req,res){
    mensaje.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

// /mensajes/idUsuario1/idUsuario2
router.get("/:emisor/:receptor",function(req,res){
    mensaje.find({
        $or:[
            {
                $and:[
                    {emisor:req.params.emisor},
                    {receptor:req.params.receptor}
                ]
            },
            {
                $and:[
                    {emisor:req.params.receptor},
                    {receptor:req.params.emisor}
                ]
            }
        ]    
    }).sort({_id:1})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


module.exports = router;