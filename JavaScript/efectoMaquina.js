const maquina=document.getElementById('maquina_de_escribir')

const efectoMaquina = (text ='', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if(cont === arrayCaracteres.length){
            clearInterval(escribir)
        }
    }, tiempo)
}

efectoMaquina("La astronomia es la religion para los ateos", 50, maquina)