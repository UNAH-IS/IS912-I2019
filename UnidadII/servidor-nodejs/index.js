var http = require('http');
var fs = require('fs'); //FS es File System

http.createServer(function(peticion, respuesta){ //request, response
    //Se ejecuta por cada peticion del usuario
    if (peticion.url == '/pagina1'){
        respuesta.writeHead(200, {'Content-type':'text/html'}); //200 es OK
        respuesta.write(`<html><head><link href="https://fonts.googleapis.com/css?family=Srisakdi" rel="stylesheet"></head><body style="font-family: 'Srisakdi', cursive;">Esta es la pagina 1</body></html>`);
        respuesta.end();
    } else if (peticion.url == '/pagina2'){
        respuesta.writeHead(200, {'Content-type':'text/html'}); //200 es OK
        respuesta.write(`<html><head><link href="/estilos" rel="stylesheet" </head><body class="texto-negrita">Esta es la pagina 2</body></html>`);
        respuesta.end();
    } else if(peticion.url== '/estilos'){
        respuesta.writeHead(200, {'Content-type':'text/css'}); //200 es OK
        respuesta.write(
            `.texto-negrita{
                font-weight:bold;
                font-size:34px;
                text-decoration:underline;
            }`);
        respuesta.end();
    } else if(peticion.url=='/login'){
        fs.readFile('./formulario.html',function(error, data){
            respuesta.writeHead(200, {'Content-type':'text/html'}); //200 es OK
            if (error)
                respuesta.write(error);
            else 
                respuesta.write(data);
            respuesta.end();
        });// punto pleca /. significa que esta al mismo nivel que el archivo actual.
        
    } else {
        respuesta.writeHead(404, {'Content-type':'text/html'}); //200 es OK
        respuesta.write(`<html><body><h1>Cuatro Cero Cuatro</h1> Recurso no encontrado</body></html>`);
        respuesta.end();
    }

}).listen(3333,function(){
    console.log('Servidor iniciado');
});