$("#slc-usuario").change(function(){
	console.log("USUARIO seleccionado: " + $("#slc-usuario").val());
	$.ajax({
		url:`/usuarios/${$("#slc-usuario").val()}/contactos`,
		dataType:"json",
		success:function(res){
			console.log(res);
			$("#contactos").html("");
			for(var i=0;i<res[0].contactos.length;i++){
				$("#contactos").append(
					`<div class="row sideBar-body" onclick="seleccionarContacto('${res[0].contactos[i]._id}','${res[0].contactos[i].nombre}','${res[0].contactos[i].imagen}');">
						<div class="col-sm-3 col-xs-3 sideBar-avatar">
						<div class="avatar-icon">
							<img src="${res[0].contactos[i].imagen}">
						</div>
						</div>
						<div class="col-sm-9 col-xs-9 sideBar-main">
						<div class="row">
							<div class="col-sm-8 col-xs-8 sideBar-name">
							<span class="name-meta">${res[0].contactos[i].nombre}
							</span>
							</div>
							<div class="col-sm-4 col-xs-4 pull-right sideBar-time">
							<span class="time-meta pull-right">18:18
							</span>
							</div>
						</div>
						</div>
					</div>`
				);
			}
		},
		error:function(error){
			console.error(error);
		}
	});
});

function seleccionarContacto(codigoContacto, nombreContacto, urlImagen){
		console.log("Seleccionar contacto: " + nombreContacto);
		$("#imagen-contacto").attr("src",urlImagen);
		$("#nombre-contacto").html(nombreContacto);

		$.ajax({
			url:`/mensajes/${$("#slc-usuario").val()}/${codigoContacto}`,
			dataType:"json",
			success:function(res){
				console.log(res);
				for(var i=0;i<res.length;i++){
					$("#conversation").append(
						`<div class="row message-body">
							<div class="col-sm-12 message-main-sender">
								<div class="sender">
								<div class="message-text">
								${res[i].mensaje}
								</div>
								<span class="message-time pull-right">
								18:18
								</span>
								</div>
							</div>
							</div>`
					);
				}
			},
			error:function(error){
				console.error(error);
			}
		});
}

function cargarConversacion(codigoContacto){
	$.ajax({
		url:`/mensajes/${$("#slc-usuario").val()}/${codigoContacto}`,
		method:"GET",
		dataType:"json",
		success:function(res){
			
		},
		error:function(error){
			console.error(error);
		}
	});
}

function anexarMensaje(claseCss,mensaje,hora_mensaje){
	$("#conversation").append(
		`<div class="row message-body">
		<div class="col-sm-12 message-main-${claseCss}">
		  <div class="${claseCss}">
			<div class="message-text">
			 ${mensaje}
			</div>
			<span class="message-time pull-right">
			  ${hora_mensaje}
			</span>
		  </div>
		</div>
	  </div>`
	);
}

$("#btn-enviar").click(function(){
	/*alert("Enviar mensaje: " + $("#txta-mensaje").val() + 
			", Emisor: " + $("#slc-usuario").val() + 
			", Receptor: " + $("#receptor").val());*/

	$.ajax({
		url:"/enviar",
		data:`emisor=${$("#slc-usuario").val()}&receptor=${$("#receptor").val()}&mensaje=${$("#txta-mensaje").val()}&hora=66:66`,
		dataType:"json",
		method:"POST",
		success:function(res){
			console.log(res);
			if (res.affectedRows==1){
				claseCss="sender";
				anexarMensaje(claseCss,$("#txta-mensaje").val(),"66:66");
				$("#txta-mensaje").val("");
			}else{
				alert("Error al guardar mensaje");
			}
		},
		error:function(error){
			console.log(error);
		}
	});
});

$(document).ready(function(){
	$.ajax({
		url:"/usuarios",
		method:"GET",
		dataType:"json",
		success:function(res){
			console.log(res);
			for (var i=0;i<res.length;i++){
				$("#slc-usuario").append(`<option value="${res[i]._id}">${res[i].nombre}</option>`);
				$("#slc-usuario").val(null);
			}
		},
		error:function(error){
			console.error(error);
		}
	});

	setInterval(function(){
			if($("#receptor").val()!=""){
				$("#conversation").html("");
				cargarConversacion($("#receptor").val());
			}
		},	5000
	);
});