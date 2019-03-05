var db;

(function(){
    if (!('indexedDB' in window)){
        console.err("El navegador no soporta indexedDB");
        return;
    }

    //open crea la base de datos si no existe, en caso contrario la abre para utilizarla
    var solicitud = window.indexedDB.open("ejercicio", 1);//Parametros: nombre, version. La version debe ser entero
    
    solicitud.onsuccess = function(evento){
        db = solicitud.result;
        console.log("Se abrio o se creo la BD");
    }

    solicitud.onerror = function(evento){
        console.error(evento);
    }

    //Evento que se ejecuta cuando se crea  o actualiza la base datos
    solicitud.onupgradeneeded = function(evento){
        console.log('Se creo o actualizo la BD');
        
        db = evento.target.result;//Obtener referencia de la BD creada
        //Crear contenedores de objetos (ObjectStores)
        var objectStoreUsuarios = db.createObjectStore("usuarios", {keyPath: "codigo", autoIncrement: true});
        objectStoreUsuarios.transaction.oncomplete = function(evento){
            console.log("El object store de usuarios se creo con exito");
        }
        objectStoreUsuarios.transaction.onerror = function(evento){
            console.log("Error al crear el object store de usuarios");
        }
    }

})();


var informacion = [];
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

    /*informacion.push({
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        email:document.getElementById('email').value,
        usuario:document.getElementById('usuario').value,
        password:document.getElementById('password').value
    });*/
    var transaccion = db.transaction(["usuarios"],"readwrite");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var solicitud = objectStoreUsuarios.add({
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        email:document.getElementById('email').value,
        usuario:document.getElementById('usuario').value,
        password:document.getElementById('password').value
    });
    solicitud.onsuccess = function(evento){
        console.log("Se agrego el registro con éxito, Actualizar tabla");
        actualizarTabla();
    }
    
    
    
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
Expresion regular numero de identidad... creo...
/[0-9]{4}-[0-9]{4}-[0-9]{5}/

*/


function actualizarTabla(){
    document.getElementById('tabla-usuarios').innerHTML = '';
    for (var i=0; i<informacion.length;i++){ 
        //Se acumula el contenido con +=  
        document.getElementById('tabla-usuarios').innerHTML += 
        `<tr>
            <td>${informacion[i].nombre}</td>
            <td>${informacion[i].apellido}</td>
            <td>${informacion[i].email}</td>
            <td>${informacion[i].usuario}</td>
            <td>${informacion[i].password}</td>
            <td><button onclick="eliminar(${i});" type="button">Eliminar ${i}</button></td>
        </tr>`;
    }
}

function eliminar(indice){
    //Eliminar el elemento del arreglo de JSONs con shift
    informacion.shift(indice);
    actualizarTabla();
}

