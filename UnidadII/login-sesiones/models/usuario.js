var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        apellido : String,
        usuario : String,
        contrasena:String,
        correo:String,
        tipoUsuario:String
    }
);

module.exports = mongoose.model('usuarios',esquema);