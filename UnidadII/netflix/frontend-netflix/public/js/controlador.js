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
                `<div class="col-xl-3 col-sm-12 col-xs-12" id="${informacion[i]._id}">
                    <div>
                       <div class="encabezado" style="background-image: url(${informacion[i].caratula});"></span><span class="">${ informacion[i].original?'<img src="img/logo-netflix-small.png">':'' }</span></div>
                        <div class="descripcion">
                            <div class="titulo-descripcion">${informacion[i].nombre}</div>
                            <div class="canal">${informacion[i].descripcion}</div>
                            <div class="visualizaciones">${estrellas}</div>
                            <div class="visualizaciones"><a href="" onclick="verMas(event, '${informacion[i]._id}')">Ver más</a> | <a href="" onclick="eliminar(event, '${informacion[i]._id}')">Eliminar</a></div>
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
                $("#categoria").append(
                    `<option value="${res[i]._id}">${res[i].nombre}</option>`
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
    $("#modalVerMas").modal("show");
    console.log('Ver detalle de: ' + id);
    $.ajax({
        url:"http://localhost:3335/peliculas/"+id,
        method:"get",
        dataType:"json",
        success:function(res){
            console.log(res);
            for(var i=0; i<res[0].imagenes.length;i++){
                $("#contenedor-imagenes").append(
                    `<div class="carousel-item active">
                        <img src="${res[0].imagenes[i]}" class="d-block w-100" alt="...">
                    </div>`
                );
            }
            $('#carousel').carousel();
        },
        error:function(error){
            console.log(error);
        }
    });
}

function eliminar(e,id){
    e.preventDefault(); //Evitar comportamiento por defecto de un anchor
    console.log('Eliminar el objeto: ' + id);
    $.ajax({
        url:"http://localhost:3335/peliculas/"+id,
        method:"delete",
        dataType:"json",
        success:function(res){
            console.log(res);
            if (res.n==1 && res.ok == 1)
                $("#"+id).remove();
        },
        error:function(error){
            console.log(error);
        }
    });
}
$("#btn-guardar-pelicula").click(function(){
    var parametros = $("#formulario").serialize() + "&nombreCategoria="+$("#categoria option:selected").text();
    console.log("Información a guardar: " + parametros);
    $.ajax({
        url:"http://localhost:3335/peliculas/",
        method:"post",
        data: parametros,
        dataType: "json",
        success:function(res){
            console.log(res);
            $("#modalAgregarPelicula").modal("hide");
            var estrellas="";
            for (var j=0;j<res.calificacion;j++)
                estrellas+='<i class="fas fa-star"></i>';
            //Anexar la pelicula guardada
            $("#"+res.categoria._id).append( 
                `<div class="col-xl-3 col-sm-12 col-xs-12" id="${res._id}">
                    <div>
                       <div class="encabezado" style="background-image: url(${res.caratula});"></span><span class="">${ res.original?'<img src="img/logo-netflix-small.png">':'' }</span></div>
                        <div class="descripcion">
                            <div class="titulo-descripcion">${res.nombre}</div>
                            <div class="canal">${res.descripcion}</div>
                            <div class="visualizaciones">${estrellas}</div>
                            <div class="visualizaciones"><a href="" onclick="verMas(event, '${res._id}')">Ver más</a> | <a href="" onclick="eliminar(event, '${res._id}')">Eliminar</a></div>
                        </div>
                    </div>
                </div>`);
        },
        error:function(error){
            console.log(error);
            $("#modalVerMas").modal("hide");
        }
    });
});