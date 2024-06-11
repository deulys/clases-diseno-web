'use strict'

/* Mando */
/*  Subir el volumen 0 / 100
    Bajar el volumen 
    Mutear
*/
/* const subir=document.querySelector('#subir')
const bajar=document.querySelector('#bajar')
const mutear=document.querySelector('#mutear')
console.log(subir)

let volumen=20
let antesMutear

subir.addEventListener('click',function(){
    volumen=volumen +1
    if(volumen>=100){
        volumen=100
    }
    console.log(volumen)
})
bajar.addEventListener('click',function(){
    volumen=volumen -1
    if (volumen<=0){
        volumen=0
    }
    console.log(volumen)
})
mutear.addEventListener('click',function(){
    if (volumen!=0){
        antesMutear=volumen
        volumen=0
    }else{
        volumen=antesMutear

    }
    console.log(volumen)
}) */

/* Canales */

/* const siguiente=document.querySelector('.Siguiente')
const anterior=document.querySelector('.Anterior')
const botones=document.querySelector('.Numero')
let canal=0

siguiente.addEventListener('click',function(){
    canal++
    if(canal>=10){
        canal=0
    }
    console.log(canal)
})

anterior.addEventListener('click',function(){
    if(canal<=0){
        canal=10
    }
    canal--
    console.log(canal)

})

botones.forEach(function(eachBtn,i){
    botones[i].addEventListener('click',function(){
        canal=i
    })
 */
    


    /* Imagenes */

    const imagenes=document.querySelectorAll('.Imagen')
    const siguiente=document.querySelector('.Siguiente')
    let imagen=0

    siguiente.addEventListener('click',function(){
        imagen++
        if(imagen>=3){
            imagen=0
        }
        imagenes[imagen].classList.add('isActive')
        console.log(imagen)

    })
    