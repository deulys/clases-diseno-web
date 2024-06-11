'use strict'
// Con el use strict mostraran mensajes de error mas especificos
// debugger
// para debugear se puede cologar la palabra reservada debugger



// EL debugger con el liveserver da un poco de problema por lo que se recomienda abrir el index.html directamente en el navegador 

// Cuando hago click en .Header-btn
    //.Header-nav añado o elimino isActive
    
const headerBtn=document.querySelector('.Header-btn')
const headerNav=document.querySelector('.Header-nav')

headerBtn.addEventListener('click',function(){
    headerNav.classList.toggle('isActive')
})

// Scope es el ámbito o alcance de una varible

let dia="Martes"
let hora=12
let numero=25

// function mostrarVariable(parametro){
//     console.log(dia)
//     console.log(hora)
//     console.log(parametro)
//     let numero=25
// }
// En el caso numero no esta disponible fuera de la variable
// console.log(numero)
// mostrarVariable(true)


// let concatenacion='el día es ' + dia +' y la hora es ' + hora + ' y el número es '+numero

// console.log(concatenacion)

// Template strings
// let cadenaString=`El día es: ${dia}, la hora es ${hora}. El número es: ${numero}
// <h1>${dia}/h1>`
// console.log(cadenaString)

// let nombre="María"
// let apellido="Gutierrez"
// let saludo=new String("Hola mundo")
// let frase="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam commodi reiciendis eveniet temporibus. Dicta saepe ea quas itaque quidem delectus, natus repudiandae maiores, inventore dolores corporis reiciendis minima accusantium, nemo voluptatum asperiores id ipsa! Dignissimos excepturi dolorem atque rem ipsum, dolore fuga exercitationem mollitia accusamus fugit velit officia sint."

// console.log(
//     nombre.length, 
//     apellido.length, 
//     saludo.length,
//     nombre.toUpperCase(),
//     nombre.toLowerCase(),
//     frase.includes("Pepe"),
//     frase.includes("dolor"),
//     frase,
//     frase.trim(),
//     frase.split(" "),
//     frase.split("")
// )

// console.log(saludo)


// Números

let a=2
let b=new Number(1)
let c=7.19
let d= "2.6"
let e=toString(c)
console.log(a,b)

console.log(c.toFixed(9)) // toFixed redondea

console.log(parseInt(c)) // parseInt Nos devuelve la parte entera

console.log(typeof c, typeof d)

console.log(typeof c,typeof d, typeof e)


// Booleanos

let verdadero=true
let falso=false
console.log(typeof verdadero, typeof falso)
