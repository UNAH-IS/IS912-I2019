var express = require('express');
var UserModel = require('./models/user');
var testModule = require('./test-module');
var database = require('./database');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/',function(request, response){
  response.send({resultado:'ok'});
});

app.put('/add',function(request, response){
    testModule.test();
    let userModel = new UserModel({
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        correo: request.body.correo,
        usuario: request.body.usuario,
        pais: request.body.pais,
        password: request.body.password
    });

    userModel.save().then(doc => {
        console.log(doc);
        response.send(doc);
      })
      .catch(err => {
        console.error(err);
        response.send(err);
      });
});

app.listen(3333, function(){
    database.test();
    console.log("Servidor levantado");
});