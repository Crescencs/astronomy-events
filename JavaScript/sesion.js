

let listaUsuarios = new Array();// se crea el array
const Validar =() =>{

    let texto= document.getElementById("txtNombre").value;// mando a llamar los datos 
    let password= document.getElementById("txtPassword").value;// mando a llamar los datos
    let aviso;// declaro una variable
    
    for (usuario in listaUsuarios)// for para recorrer el hashtable
        console.log(usuario[correo]);// manda a imprimir la hashtable
        if (usuario[texto]==texto&&usuario[password]==password) {// condicion para que los datos sean correctos
            aviso="Inicio de sesion valido";// agrego una cadena a aviso
            alert(aviso);// si ;a condicion se cumple entonces sale
        }
        else{//si no
            //aviso="Error de validacion";// si no se encontro entonces se agrega esta cadena
        }
        
    }
    //alert(aviso);// dependiendo la cadena se agrega y se manda un alert

    // funcion que utiliza par el registro
const Registrar =() =>{
    let correo= document.getElementById("txtCorreo").value;// mando a llamar los datos 
    let texto= document.getElementById("txtNombre").value;// mando a llamar los datos 
    let password= document.getElementById("txtPassword").value;// mando a llamar los datos
    let users = {correo, texto, password}
    listaUsuarios.unshift(users)
    console.log(listaUsuarios);
}