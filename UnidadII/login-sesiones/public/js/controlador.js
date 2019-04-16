$("#btn-login").click(function(){
    console.log($("#formulario").serialize());
    $.ajax({
        url:"/login",
        method:"POST",
        data:$("#formulario").serialize(),
        dataType:"json",
        success:function(res){
            console.log(res);
            if (res.status == 1)
                window.location.href = "/home.html";
            else 
                alert(res.mensaje);
        },
        error:function(error){
            console.error(error);
        }
    });
});