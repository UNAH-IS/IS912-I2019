var informacion = [
    {titulo:'Marcha de las antorchas',urlCaratula:'img/1.jpg',canal:'Fuera JOH',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Attack on Titan Capitulo 10',urlCaratula:'img/2.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Attack on Titan Capitulo 11',urlCaratula:'img/3.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Dragon Ball Super',urlCaratula:'img/4.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Epica - Universal Death',urlCaratula:'img/5.jpg',canal:'Epica',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Dont stop me Now',urlCaratula:'img/6.jpg',canal:'Queen',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'UnSun - The End Of Life',urlCaratula:'img/7.jpg',canal:'UnSun',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'}
];
var indiceSeleccionado;

console.log(informacion.length);

function generarRegistros(){
    document.getElementById('registros').innerHTML =  '';
    for(var i=0;i<informacion.length;i++){
        document.getElementById('registros').innerHTML += 
            `<div class="col-xl-2 col-12 col-sm-12">
                <div>
                    <div class="encabezado" style="background-image: url(${informacion[i].urlCaratula});"><span>${informacion[i].titulo}</span><br><span class="duracion">${informacion[i].duracion}</span></div>
                    <div class="descripcion">
                        <div class="titulo-descripcion">${informacion[i].titulo}</div>
                        <div class="canal">${informacion[i].canal}</div>
                        <div class="visualizaciones">${informacion[i].visualizaciones} | ${informacion[i].subido}</div>
                        <button class="btn btn-outline-secondary" onclick="editarRegistro(${i})"><i class="fas fa-pen-square"></i></button>
                    </div>
                </div>
            </div>`;
    }
}


generarRegistros();

function editarRegistro(indice){
    indiceSeleccionado = indice;
    console.log("Editar el registro con indice: " + indice)
    document.getElementById('formulario').style.display = "block";
    document.getElementById('titulo').value = informacion[indice].titulo;
}

function guardarCambios(){
    informacion[indiceSeleccionado].titulo = document.getElementById('titulo').value;
    generarRegistros();
}