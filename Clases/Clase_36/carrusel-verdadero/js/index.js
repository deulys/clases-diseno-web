'use strict'

/* Slider */


const siguiente=document.querySelector('.Slider-arrow--next')
const anterior=document.querySelector('.Slider-arrow--prev')
const sliderBtn=document.querySelectorAll('.Slider-btn')
const sliderImg=document.querySelectorAll('.Slider-img')

let posicion=0

let mostrarImagen=function(){
    sliderImg.forEach(function(each,i){
        sliderImg[i].classList.remove('IsVisible')
        sliderBtn[i].classList.remove('isActive')
    })
    sliderImg[posicion].classList.add('isVisible')
    sliderBtn[posicion].classList.add('isActive')
}

siguiente.addEventListener('click',function(){
    posicion++
    if(posicion>=3){
        posicion=0
    }
    mostrarImagen()

    console.log(posicion)
})
anterior.addEventListener('click',function(){
    posicion--
    if(posicion<0){
        posicion=2
    }
    mostrarImagen()
})

sliderBtn.forEach(function(each,i){
    sliderBtn[i].addEventListener('click',function(){
        posicion=i
        mostrarImagen()
    })
})