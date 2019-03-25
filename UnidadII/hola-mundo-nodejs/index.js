var http = require('http');

http.createServer(function(peticion, respuesta){ //request, response
    //Se ejecuta por cada peticion del usuario
    respuesta.writeHead(200, {'Content-type':'text/html'}); //200 es OK
    respuesta.write('<html><body>Hola Mundo</body></html>');
    respuesta.end();
}).listen(3333,function(){
    console.log('Servidor iniciado');
});