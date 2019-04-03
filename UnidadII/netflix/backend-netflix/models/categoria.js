var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        orden: Number,
        descripcion : String
    }
);
module.exports = mongoose.model('categorias',esquema);
