'use strict'

/* FONDOS SCROLL */

/* Si se escribe en la consola window se puede ver todos los eventos y propiedades de la ventana o pestaña */

let body=document.querySelector('body')
let scrollPosition=0
let titular=document.querySelector('h1')
console.log(titular)
/* Si se agrega un parametro a function se puede revisar todo el contenido de scroll del window function(e)*/
window.addEventListener('scroll',function(){
    
    scrollPosition=window.scrollY
    console.clear()
    console.log(scrollPosition)
    if(scrollPosition>500){
        body.classList.toggle('background-blue')
        titular.classList.add('oscuro')
    }else{
        body.classList.remove('background-blue')
        titular.classList.remove('oscuro')
    }

    if(scrollPosition>900){
        body.classList.add('background-green')
        titular.classList.add('yellow')
    }else{
        body.classList.remove('background-green')
        titular.classList.remove('yellow')
    }
})

