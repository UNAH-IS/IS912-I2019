/*var a=0;
var b=1.5;
var c=true;
var d=[1,4,5];
var nombre="Juan";
var apellido='Perez';
*/
var nombre='Juan';
var apellido='Perez';

//JSON
var persona={
    nombre:'Juan',
    apellido:'Perez',
    edad:35,
    genero:'Masculino',
    fechaNacimiento:{
        dia:12,
        mes:12,
        anio:2012
    },
    mostrarMensaje:function(){
        console.log("Este es un mensaje de persona");
    }
}

persona.pais='Honduras';
var x = [{nombre:'Juan',apellido:'Perez'},
        {nombre:'Pedro',apellido:'Martinez'},
        {nombre:'Jose',apellido:'Lainez'},
        {nombre:'Maria',apellido:'Gomez'}];
//document.write(`${persona.nombre} ${persona.apellido}(${persona.pais})`);
document.write(JSON.stringify(x)); //Convertir un JSON a cadena
console.log(x);
/*for(var i=0;i<10;i++){
    document.write(`<h1>Hola ${nombre} ${apellido}</h1>`); //Incrustar valores de variables utilizando ${}
}*/


function sumar(a,b){
    return a+b;
}

console.log("Resultado suma: " + sumar(5,6));
console.log(`Resultado suma: ${sumar(5,6)}`);


var restar = function(a,b){
    return a-b;
}

console.log("Resultado resta: " + restar(5,6));
console.log(`Resultado resta:   ${restar(5,6)}`);



persona.mostrarMensaje();



mensaje(sumar(6,7)); //Aqui se envia el resultado de la ejecucion de una funcion

///En Javascript es posible pasar de parametro una funcion en otra funcion

function ejecutarFuncion(f,ejecutar){
    
    if (ejecutar)
        f('Z');
    else
        console.log('No se ejecutara nada');
}

ejecutarFuncion(mensaje, true);
ejecutarFuncion(function(){
    console.log('Esta es una funcion anonima que se envia de parametro');
}, true);

//Autoejecucion de una funcion anonima
(function(mensaje){
    console.log("Que loco " + mensaje);
})('-_-');

//La siguiente funcion daría el mismo resultado que la anterior.
function mensaje(mensaje){
    console.log("Mensaje: " + mensaje);
}

mensaje('-_-');