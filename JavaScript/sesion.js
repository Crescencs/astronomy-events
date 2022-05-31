 //declarar objeto
let texto;

const ValidarSesion=()=>{
    listaUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    let usuario=document.getElementById("txtUser").value;
    usuario=ValidarNombre(usuario, listaUsuarios);
    let contraseña=document.getElementById("txtPass").value;
    contraseña=ValidarContraseña(contraseña,listaUsuarios);
        
    if(usuario!=-1&&contraseña!=-1){
        alert("Bienvenido "+usuario);
        window.location.assign("index.html");
    }else{
        texto="El usuario o la contraseña estan incorrectos";
        document.getElementById("validacionInicioSesion").innerHTML=texto;
    }
    
    
}

const ValidarNombre=(usuarioV, listaUsuarios)=>{
    for(i=0;i<listaUsuarios.length;i++){
        if(usuarioV==listaUsuarios[i].usuario){
            return usuarioV;
        }
    }
        return -1;

}

const ValidarContraseña=(contraseña, listaUsuarios)=>{
    for(i=0;i<listaUsuarios.length;i++){
        if(contraseña==listaUsuarios[i].contraseña){
            return contraseña;
        }
    }
    return -1;
}


