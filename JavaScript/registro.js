class Usuario{
    constructor(correo, usuario, contraseña){
        this.correo=correo;
        this.usuario=usuario;
        this.contraseña=contraseña;
    }
}

const Registrar=()=>{
    let correo=-1;
    let usuario=-1;
    let contraseña=-1;
    listaUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    correo=document.getElementById("txtCorreoR").value;
    alert(correo);
    usuario=document.getElementById("txtUserR").value;
    contraseña= document.getElementById("txtPassR").value;
    let contraseñaR= document.getElementById("txtPassRC").value;
    if(correo!=-1 && usuario!=-1 && contraseña!=-1){
        if(contraseña==contraseñaR){
            alert("Bievenido "+usuario);
            const registroUsuario= new Usuario(correo, usuario, contraseña);
            listaUsuarios.push(registroUsuario);
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
            window.location.assign("../InicioRegistro.html");
        }else{
            texto="Las contraseñas no coiciden, vuelva a intentarlo";
            document.getElementById("validacionRegistro").innerHTML=texto;
        }
    }
}
