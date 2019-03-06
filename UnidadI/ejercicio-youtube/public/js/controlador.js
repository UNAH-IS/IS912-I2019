var informacion = [
    {titulo:'Marcha de las antorchas',urlCaratula:'img/1.jpg',canal:'Fuera JOH',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Attack on Titan Capitulo 10',urlCaratula:'img/2.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Attack on Titan Capitulo 11',urlCaratula:'img/3.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Dragon Ball Super',urlCaratula:'img/4.jpg',canal:'Anime Cool',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Epica - Universal Death',urlCaratula:'img/5.jpg',canal:'Epica',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'Dont stop me Now',urlCaratula:'img/6.jpg',canal:'Queen',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'},
    {titulo:'UnSun - The End Of Life',urlCaratula:'img/7.jpg',canal:'UnSun',visualizaciones:'19k',duracion:'35:25',subido:'19 hours ago'}
];


console.log(informacion.length);

function generarRegistros(){
    for(var i=0;i<informacion.length;i++){
        document.getElementById('registros').innerHTML += 
            `<div class="col-xl-2 col-12 col-sm-12">
                <div>
                    <div class="encabezado" style="background-image: url(${informacion[i].urlCaratula});"><span>Lorem ipsum</span><br><span class="duracion">33:25</span></div>
                    <div class="descripcion">
                        <div class="titulo-descripcion">Titulo descripcion</div>
                        <div class="canal">Nombre canal</div>
                        <div class="visualizaciones">19k | 19 hours ago</div>
                    </div>
                </div>
            </div>`;
    }
}


generarRegistros();