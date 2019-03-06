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
        actualizarTabla();
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
    var transaccion = db.transaction(["usuarios"],"readonly");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    document.getElementById('tabla-usuarios').innerHTML = '';
    var cursor = objectStoreUsuarios.openCursor();
    cursor.onsuccess = function(evento){
        //Se ejecuta por cada elemento leído del objectstore
        if(evento.target.result){
            //console.log(evento.target.result.value);
            var registro = evento.target.result.value;
            document.getElementById('tabla-usuarios').innerHTML += 
            `<tr>
                <td>${registro.nombre}</td>
                <td>${registro.apellido}</td>
                <td>${registro.email}</td>
                <td>${registro.usuario}</td>
                <td>${registro.password}</td>
                <td><button onclick="eliminar(${evento.target.result.key});" type="button">Eliminar ${evento.target.result.key}</button></td>
            </tr>`;
            evento.target.result.continue();
        }
    };
    
    
}

function eliminar(key){
    //Eliminar el elemento del arreglo de JSONs con shift
    var transaccion = db.transaction(["usuarios"],"readwrite");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var solicitud = objectStoreUsuarios.delete(key);
    solicitud.onsuccess = function(){
        console.log("Se elimino");
    }
    actualizarTabla();
}

