var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        emisor : mongoose.Types.ObjectId,
        receptor : mongoose.Types.ObjectId,
        mensaje : String,
        fechaHora: String,
        leido: Boolean
    }
);
module.exports = mongoose.model('mensajes',esquema);
