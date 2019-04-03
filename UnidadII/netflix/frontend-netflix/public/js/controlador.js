/*calificacion
caratula
categoria
descripcion
nombre
original*/
function generarItems(informacion){
    //console.log('GENERAR ITEMS');
    
    for(var i=0; i<informacion.length;i++){
        //console.log(informacion[i]);
        var estrellas="";
        for (var j=0;j<informacion[i].calificacion;j++)
            estrellas+='<i class="fas fa-star"></i>';

        document.getElementById(informacion[i].categoria._id).innerHTML += 
                `<div class="col-xl-3 col-sm-12 col-xs-12">
                    <div>
                       <div class="encabezado" style="background-image: url(${informacion[i].caratula});"></span><span class="">${ informacion[i].original?'<img src="img/logo-netflix-small.png">':'' }</span></div>
                        <div class="descripcion">
                            <div class="titulo-descripcion">${informacion[i].nombre}</div>
                            <div class="canal">${informacion[i].descripcion}</div>
                            <div class="visualizaciones">${estrellas}</div>
                            <div class="visualizaciones"><a href="" onclick="verMas(event, '${informacion[i]._id}')">Ver ahora</a> | <a href="" onclick="eliminar(event, '${informacion[i]._id}')">Eliminar</a></div>
                        </div>
                    </div>
                </div>`;
    }
}



$(document).ready(function(){
    console.log("El DOM ha sido cargado");
    $.ajax({
        url:"http://localhost:3335/categorias",
        method:"GET",
        dataType:"json",
        success:function(res){
            console.log("Respuesta");
            console.log(res);
            for (var i=0; i<res.length; i++){
                $("#categorias").append(
                    `<div class="col-12">
                        <h1>${res[i].nombre}</h1>
                        <div class="row" id="${res[i]._id}">
                        </div>
                    </div>`
                );
            }
            obtenerPeliculas();
        },
        error:function(error){
            console.log(error);
        }
    });
    /**/
});

function obtenerPeliculas(){
    $.ajax({
        url:"http://localhost:3335/peliculas",
        method:"GET",
        dataType:"json",
        success:function(res){
            console.log("Respuesta");
            console.log(res);
            generarItems(res);
        },
        error:function(error){
            console.log(error);
        }
    });
}

function verMas(e,id){
    e.preventDefault();//Evitar comportamiento por defecto de un anchor
    console.log('Ver detalle de: ' + id);
}

function eliminar(e,id){
    e.preventDefault();
    console.log('Eliminar el objeto: ' + id);
}