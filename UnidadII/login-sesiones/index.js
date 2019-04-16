var express = require("express");
var session = require("express-session");
var database = require("./modules/database");
var usuario = require("./models/usuario");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static("public"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

//Verificar si existe una variable de sesion para poner publica la carpeta public admin o cajero
var publicAdmin = express.static("public-admin");
var publicCajero = express.static("public-cajero");

//Implementar midleware que verifica si tiene acceso a las carpetas correspondientes utilizando las variables de sesion
app.use(
    function(req,res,next){
        if (req.session.correoUsuario){
            //Significa que el usuario si esta logueado
            if (req.session.codigoTipoUsuario == 'Cajero')
                publicCajero(req,res,next);
            else if (req.session.codigoTipoUsuario == 'Administrador')
                publicAdmin(req,res,next);
        }
        else
            return next();
    }
);

app.post("/login",function(req, res){

    usuario.find({usuario:req.body.usuario, contrasena:req.body.contrasena})
    .then(data=>{
        if (data.length==1){//Significa que si encontro un usuario con las credenciales indicadas
            //Establecer las variables de sesion
            req.session.codigoUsuario = data[0]._id;
            req.session.correoUsuario =  data[0].correo;
            req.session.codigoTipoUsuario = data[0].tipoUsuario;
            res.send({status:1,mensaje:"Usuario autenticado con éxito", usuario:data[0]});
        }else{
            res.send({status:0,mensaje:"Credenciales inválidas"});
        }
        
    })
    .catch(error=>{
        res.send(error);
    }); 
    /*if (req.body.usuario == 'jperez' && req.body.contrasena=='asd.456'){
        req.session.codigoUsuario = 1;
        req.session.correoUsuario =  'jperez@gmail.com';
        req.session.codigoTipoUsuario = '2';
    }*/
});

app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect("/");
});

//La siguiente es una peticion restringida, se envia una funcion midleware que verifica si esta autenticadoo no.
app.get("/peticion-registringido",verificarAutenticacion,function(req, res){
    res.send("Este es un contenido restringido");
    res.end();
});

///Para agregar seguridad a una ruta especifica, esta función sería llamada desde alguna peticion.
function verificarAutenticacion(req, res, next){
	if(req.session.correoUsuario)
		return next();
	else
		res.send("ERROR, ACCESO NO AUTORIZADO");
}

app.listen(8111);