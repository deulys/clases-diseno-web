'use strict'

/* Carrusel */

const imagenes=document.querySelectorAll('.Imagen')
const siguiente=document.querySelector('.Siguiente')
const anterior=document.querySelector('.Anterior')
const botones=document.querySelectorAll('.Numero')
let posicion=0
let cambiaClase=function(){
    imagenes.forEach(function(each,i){
        imagenes[i].classList.remove('isActive')
    })
    imagenes[posicion].classList.add('isActive')
    console.log(posicion)
}

siguiente.addEventListener('click',function(){
    posicion++
    if(posicion>=imagenes.length){
        posicion=0
    }
   cambiaClase()
})
anterior.addEventListener('click',function(){
    posicion--
    if(posicion<0){
        posicion=imagenes.length-1
    }
    cambiaClase()
})

botones.forEach(function(each,i){
    botones[i].addEventListener('click',function(){
        posicion=i
        console.log(posicion)
        cambiaClase()
    })
    
})

