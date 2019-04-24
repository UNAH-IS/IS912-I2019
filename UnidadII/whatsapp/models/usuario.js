var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        correo : String,
        contrasena:String,
        imagen: String,
        telefono: String
    }
);
module.exports = mongoose.model('usuarios',esquema);