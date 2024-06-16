'use strict'

/* FRASE TRANSPARENTA */
const texto=document.querySelector('.frase')
const cadenaTexto=texto.textContent
const arrayCaracteres=cadenaTexto.split("")


texto.textContent=""

for(let i=0;i<arrayCaracteres.length;i++){
    texto.innerHTML+=`<span>${arrayCaracteres[i]}</span>`
}

let caracter=0
let timer=setInterval(escribe,50);
function escribe(){
    const span=texto.querySelectorAll('span')[caracter]
    span.classList.add('fade')
    caracter++
    if(caracter==arrayCaracteres.length){
        completado()
    }


}
function completado(){
    clearInterval(timer)
    /* timer=null */
}