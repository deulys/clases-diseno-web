'use strict'

// Link nombrar variables
// https://www.youtube.com/watch?v=nWSe2u9s01Q
// CONDICIONALES
//  Son estructuras de control que nos permiten tomar decisiones en el flujo de la programación

let edad=17
if (edad>17){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

let falso=false
if(falso===false){
    console.log("El valor es falso")
}else{
    console.log("El valor es verdadero")
}

let estaCasada=true
if(estaCasada===true){
    console.log("La usuaria está casada")
}else{
    console.log("La usuaria es soltera")
}

let edadUsuario=18
if(edadUsuario>=18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

// let hora=5
// if(hora>0 && hora<=5){
//     console.log("Déjame dormir")
// } else if(hora>=6 && hora<=12){
//     console.log("Buenos días")
// }else if(hora>= 13 && hora<=20){
//     console.log("Buenas tardes")
// }else{
//     console.log("Buenas noches")
// }

function saludarHorario(hora){
    if(hora>0 && hora<=5){
        console.log("Déjame dormir")
    } else if(hora>=6 && hora<=12){
        console.log("Buenos días")
    }else if(hora>= 13 && hora<=20){
        console.log("Buenas tardes")
    }else{
        console.log("Buenas noches")
    }
}

saludarHorario(23)

// Operador ternario
// (condicion)?verdadero:falso

let edadPersona=17
console.log("Operador ternario")
let eresMayor=(edad>=18)?"Eres mayor de edad":"Eres menor de edad"
console.log(eresMayor)

// Switch Case
let dia=2
// switch(){
//     case x:
//         acción
//         break
//     case y:
//         acción
//         break
//     case z:
//         accción
//         break
//     default:
//         acción
//         break
// }

switch(dia){
    case 1:
        console.log("El día es Lunes")
        break
    case 2:
        console.log("El dìa es Martes")
        break
    case 3:
        console.log("El día es Miércoles")
        break
    case 4:
        console.log("El día es Jueves")
        break
    case 5:
        console.log("El día es Viernes")
        break
    case 6:
        console.log("El día es Sábado")
        break
    case 7:
        console.log("El día es Domingo")
        break

    default:
        console.log("Ese día no existe en la semana")
        break
}



let camiseta=true
let negro=true
if(camiseta===true && negro===true){
    console.log("Tengo una camiseta y es negra")
}else if(camiseta===false && negro===true){
    console.log("No tienes camiseta y te gusta el color negro")
}else if(camiseta===false && negro===false){
    console.log("No tienes camiseta y no es color negra")
}

// Practica
let laptop=true
let blanca=true
if(laptop===true && blanca===true){
    console.log("Tienes una laptop blanca")
}else if(laptop===false && blanca===true){
    console.log("Tienes una computadora de escritorio blanca")
}else if(laptop===true && blanca===false){
    console.log("Tienes un portatil negro")
}else if(laptop===false || blanca===true){
    console.log("Tienes un dispositivo blanco sobre el escritorio")
}


let boderClass=true
let backgroundColor=true
if(boderClass===true && backgroundColor===true){
    console.log("El boton esta activo, puede presionarlo")
}else if(boderClass===false && backgroundColor===false){
    console.log("El boton esta inactivo")
}else if(boderClass===true && backgroundColor===false){
    console.log("El boton esta activo pero falta llenar datos en el formulario")
}