var informacion = [
    {titulo:'La leyenda del Ayuwoki',urlCaratula:'img/1.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'Ultima hora',subido:'3k comentarios'},
    {titulo:'Narcos Honduras',urlCaratula:'img/2.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'Ultima hora',subido:'3k comentarios'},
    {titulo:'Finding Nemo',urlCaratula:'img/3.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'Ultima hora',subido:'3k comentarios'},
    {titulo:'Love Rosie',urlCaratula:'img/4.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'',subido:'3k comentarios'},
    {titulo:'Avengers',urlCaratula:'img/5.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'',subido:'3k comentarios'},
    {titulo:'Bohemian Rhapsody',urlCaratula:'img/6.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'',subido:'3k comentarios'},
    {titulo:'Harry Potter y los Padrinos Mágicos',urlCaratula:'img/7.jpg',canal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam cupiditate ullam voluptates. Iusto, asperiores?',visualizaciones:'15k Likes',duracion:'',subido:'3k comentarios'}
];

//console.log(informacion);

function generarItems(){
    //console.log('GENERAR ITEMS');
    document.getElementById('registros').innerHTML = '';
    for(var i=0; i<informacion.length;i++){
        //console.log(informacion[i]);
        document.getElementById('registros').innerHTML += 
                `<div class="col-xl-3 col-sm-12 col-xs-12">
                    <div>
                       <div class="encabezado" style="background-image: url(${informacion[i].urlCaratula});"></span><span class=""><img src="img/logo-netflix-small.png"></span></div>
                        <div class="descripcion">
                            <div class="titulo-descripcion">${informacion[i].titulo}</div>
                            <div class="canal">${informacion[i].canal}</div>
                            <div class="visualizaciones"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <div class="visualizaciones"><a href="">Ver ahora</a> | <a href="">Eliminar</a></div>
                        </div>
                    </div>
                </div>`;
    }
}

generarItems();


$(document).ready(function(){
    console.log("El DOM ha sido cargado");
    $.ajax({
        url:"http://localhost:3334/peliculas",
        method:"GET",
        dataType:"json",
        success:function(res){
            console.log("Respuesta");
            console.log(res);
        },
        error:function(error){
            console.log(error);
        }
    });
});