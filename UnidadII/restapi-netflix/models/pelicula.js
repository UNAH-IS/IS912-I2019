var mongoose = require("mongoose");

var esquemaPersona = new mongoose.Schema(
    {
        nombre : String,
        descripcion : String,
        categoria : mongoose.Schema.Types.Mixed,
        calificacion: Number,
        imagenes : Array
    }
);
//El primer parametro es el singular de la coleccion, 
//mediante este parametro hace el enlace,
//si se pone mal este parametro no se podria realizar ninguna instruccion
module.exports = mongoose.model('pelicula',esquemaPersona);



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