let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    usuario: String,
    pais: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);