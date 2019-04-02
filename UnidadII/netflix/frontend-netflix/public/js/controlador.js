/*calificacion
caratula
categoria
descripcion
nombre
original*/
function generarItems(informacion){
    //console.log('GENERAR ITEMS');
    document.getElementById('registros').innerHTML = '';
    for(var i=0; i<informacion.length;i++){
        //console.log(informacion[i]);
        var estrellas="";
        for (var j=0;j<informacion[i].calificacion;j++)
            estrellas+='<i class="fas fa-star"></i>';

        document.getElementById('registros').innerHTML += 
                `<div class="col-xl-3 col-sm-12 col-xs-12">
                    <div>
                       <div class="encabezado" style="background-image: url(${informacion[i].caratula});"></span><span class="">${ informacion[i].original?'<img src="img/logo-netflix-small.png">':'' }</span></div>
                        <div class="descripcion">
                            <div class="titulo-descripcion">${informacion[i].nombre}</div>
                            <div class="canal">${informacion[i].descripcion}</div>
                            <div class="visualizaciones">${estrellas}</div>
                            <div class="visualizaciones"><a href="">Ver ahora</a> | <a href="">Eliminar</a></div>
                        </div>
                    </div>
                </div>`;
    }
}



$(document).ready(function(){
    console.log("El DOM ha sido cargado");
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
});