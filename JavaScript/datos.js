
class Usuario{
    constructor(correo, usuario, contraseña){
        this.correo=correo;
        this.usuario=usuario;
        this.contraseña=contraseña;
    }
}
const listaUsuarios=[new Usuario("Crescencio123@gmail.com","Crescencio",213477),new Usuario("Paola456@gmail.com","Paola",214445), new Usuario("Maria789@gmail.com","Maria",131062)]; //declarar objeto


localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
console.log(JSON.parse(localStorage.getItem("usuarios")));



//funcion trim(): elimina espacios vacios a una variable

