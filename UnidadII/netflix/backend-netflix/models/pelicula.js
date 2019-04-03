var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        descripcion : String,
        caratula:String,
        categoria : mongoose.Schema.Types.Mixed,        
        calificacion: Number,
        imagenes : Array,
        original:Boolean
    }
);
//El primer parametro es el singular de la coleccion, 
//mediante este parametro hace el enlace,
//si se pone mal este parametro no se podria realizar ninguna instruccion
module.exports = mongoose.model('peliculas',esquema);



/*
Tipos de datos para los esquemas
Array
Boolean
Buffer
Date
Mixed (A generic / flexible data type)
Number
ObjectId
String
*/