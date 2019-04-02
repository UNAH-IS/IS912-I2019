var mongoose = require("mongoose");

var servidor = "localhost:27017";
var nombreBaseDatos ="netflix";

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${servidor}/${nombreBaseDatos}`)
        .then(()=>{
            console.log("Se conecto a la base de datos");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));   
        });
    }
}


module.exports = new Database();



/*

()=>{}
Es equivalente a:
function(){}


error=>{}
Es equivalente a:
function(error){}
*/