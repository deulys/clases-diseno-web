'use strict'

/* 
    BOOLEANOS

    Comparadores lógicos
    AND -> &&
    OR  -> ||

*/


/* let proyectoNota = 75
let examenNota = 36 */

/* if(proyectoFinal===true && examenFinal===true){
    console.log("Obtienes el diploma")
}else{
    console.log("Te vas a la segunda convocatoria")
} */


/*Truthy / Falsy*/
// True         --> Truthy
// False        -->Falsy
// "..."        -->Truthy
// ""           -->Falsy
// 0            -->Falsy
// 12345        -->Truthy
// Array        -->Truthy
// Object       -->Truthy
// undefined    -->Falsy
// null         -->Falsy
// NaN          -->Falsy

// Si una variable string no tiene valor es vacio es false
// Si esta llena ejemplo "2024" es verdadera
// Si tiene "0" es verdadera
// Si es vacio "" es falso
// Si el valor es 0 el valor es false
// Si es valor es 1234 el valor es verdadero
// Si el valor es -1234 el valor es verdadero
// Los arreglos y objetos asi esten vacios siempre van a ser    verdadero
// El valor undefined es falso
// El valor null es falso
// El valor NaN es falso

/* if([]){
    console.log("Truthy")
}else{
    console.log("Falsy")
} */

/* let proyectoFinal=true
let examenFinal=true */

/* onsole.log(1===1)
console.log('hola'==='hola')
console.log(true===true)

console.log(proyectoFinal===true)
console.log(examenFinal===true) */

/* Es mejor solo comparar */
/* console.log(proyectoFinal) */

console.log(1 && "hola"==="hola" )
console.log(0 && "hola"==="hola" )  // devuelve 0
console.log(true && "hola") //devuelve hola
console.log(true && "hola")
console.log(true && 2024) //devuelve 2024
console.log(true && true) //devuelve true

console.log(true && true && true && true && true && 'hola' ) //Devuelve hola
console.log(false && true && true && true && true && 'hola') // Devuelve false

// Si se cumple devuelve el valor de la derecha -->
// Si no se cumple entonces devuelve el valor de la izquierda  <--

console.log('hola' && true && true && true) //Devuelve true
console.log('hola' && 1234 && true && true ) //Devuelve true
console.log('hola' && 1234 && [] && true) //Devuleve true
console.log('hola' && 1234 && [] && {})//Devulve {}
console.log('hola' || true || true || true) //Devuelve hola
console.log( false || false || false || 12345) //Devuelve 12345 

// En el caso de or || devuelve el primer true de izquierda a derecha

let edad=18
let nombre= "Timmy"

if(edad>=18 && nombre ==="Timmy"){
    console.log("Eres mayor de edad y te llamas Timmy")
}else{
    console.log("Quién eres")
}

let proyectoFinal=false
let examenFinal=true


if(proyectoFinal && examenFinal){
    console.log("Has aprobado")
}else{
    console.log("Has suspendido")
}

let meQuiere=true
let meQuiereMucho=true


if(meQuiere || meQuiereMucho){
    console.log("Me quiere")
}else{
    console.log("No me Quiere")
}

let arreglo=[]
let objeto={}
let cero=0
let vacio=''
let entero=1234

console.log(arreglo && objeto && entero)

console.log(objeto || (cero && vacio))

console.log(vacio && cero && arreglo)

console.log()
