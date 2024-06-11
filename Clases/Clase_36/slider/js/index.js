'use strict'

/* Carrusel */

let posicion=0
let siguiente=document.querySelector('.Siguiente')
let anterior=document.querySelector('.Anterior')
const carrouselBtn=document.querySelectorAll('.Carrousel-btn')
let carrouselContainer=document.querySelector('.Carrousel-container')
console.log(carrouselBtn)
const desplazarContainer=function(){
    carrouselContainer.style.transform=`translateX(-${posicion * (100/3)}%)`
}

siguiente.addEventListener('click',function(){
    posicion++
    if(posicion>=3){
        posicion=0
    }
    console.log(posicion)
    desplazarContainer()
})

anterior.addEventListener('click',function(){
    posicion--
    if(posicion<0){
        posicion=2
    }
    console.log(posicion)
    desplazarContainer()
})
carrouselBtn.forEach(function(each,i){
    carrouselBtn[i].addEventListener('click',function(){
        posicion=i
        
        desplazarContainer()
    })
})

setInterval(function(){
    posicion++
    if(posicion>=3){
        posicion=0
    }
    console.log(posicion)
    desplazarContainer()
},2000)

