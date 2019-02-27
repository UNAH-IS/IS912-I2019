/*

Modelo: Base de datos, informacion, logica de negocios
    Backend: PHP, NodeJS, Ruby, Python
Vista: GUI, Lo que el usuario ve
    HTML, CSS
Controlador: Eventos, acciones, comportamiento del aplicativo
    Javascript del lado del cliente

*/

//DOM (Document Object Model)
function registrar(){
    var campos = [
        {campo:'nombre',valido:false},
        {campo:'apellido',valido:false},
        {campo:'email',valido:false},
        {campo:'usuario',valido:false},
        {campo:'password',valido:false}
    ];
    
    for (var i=0;i<campos.length;i++){
        campos[i].valido = validarCampoVacio(campos[i].campo);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].valido)
            return;
    }
    
    //Todo esta bien, todo saldra bien,... OK?
    document.getElementById('div-mensaje-exito').style.display = 'block';
    
}

function validarCampoVacio(campo){
    if (document.getElementById(campo).value ==''){   
        document.getElementById(campo).classList.add('input-error');
        document.getElementById('div-error-'+campo).style.display = 'block';
        return false;
    }else{
        document.getElementById(campo).classList.remove('input-error');
        document.getElementById('div-error-'+campo).style.display = 'none';
        return true;
    }
}


function validarCorreo(etiquetaCorreo){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiquetaCorreo.value))
        etiquetaCorreo.classList.remove('input-error');
    else
        etiquetaCorreo.classList.add('input-error');

}


/*
/[0-9]{4}-[0-9]{4}-[0-9]{5}/

*/