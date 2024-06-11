'use strict'

// LOOPS

// While

let contador=0
while(contador <10){
    console.log(contador++)
}

// For

//for(inicialización de variable;codición;decrementamos o incrementamos)
for(let i=0;i<10;i++){
    console.log("For"+1)
    console.log(`For: ${i}`)
} 

let numeros=[10,20,30,40,50,60]

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

let hola="Hola mundo"
console.log(hola)

for(let i=0;i<hola.length;i++){
    console.log(hola[i])
}

for(let i=0;i<hola.length;i++){
    console.log(`El valor de la posición ${i} es ${hola[i]}.`)
}


 /* For in
    Es un for especial para un objeto. Nos va a permitir recorrer las propiedades de un objeto 
    For in -> Recorre propiedades
*/

const kike={
        nombre:"kike",
        apellido:"Hernandez",
        edad:33
}
for(const propiedad in kike){
    /* console.log(propiedad)
    console.log(`Key: ${propiedad} `) */
    console.log(`Key: ${propiedad}, Value: ${kike[propiedad]}`)
}

/* 
    For of
    Nos permite recorrer todos los elementos de cualquier objeto iterable
    For of recorre todos los elementos
*/

for(const elemento of numeros){
    console.log(elemento)
}

let cadena="Hola mundo"
for(let caracter of cadena){
    console.log(caracter)
}

// Declara una variable y asígnale un arreglo de números Luego, muestra cada número en la consola usando un bucle.
let arreglo=[10,5,15,34,87,45,67]

for(let i=0;i<arreglo.length;i++){
    console.log(`Número ${i+1} es ${arreglo[i]}`)
}


// Crea una función que tome un arreglo de números como parámetro y devuelva la suma de todos ellos calcularSuma([1,2,3,4,5])

function calcularSuma(arregloNumero){
    let suma=0;
    for(let i=0;i<arregloNumero.length;i++){
        suma+=arregloNumero[i]
    }
    console.log(`La suma de los elementos del arreglo es: ${suma}`)
}

calcularSuma(arreglo)

// Imprime los números del 1 al 10 en la consola

for(let i=1;i<=10;i++){
    console.log(`Número: ${i}`)
}


// No bucle. Encuentra el número mayor entre dos números y muestra el resultado en la consola. Le pasamos los dos números y nos devuelve el mayor

function calcularMayor(numero1,numero2){
    if(numero1>numero2){
        console.log(`El número mayor es el número 1: ${numero1} es mayor que ${numero2}`)
    }else if(numero2>numero1){
        console.log(`El número mayor es el número 2: ${numero2} es mayor que ${numero1}`)
    }else{
        console.log(`Los nùmero son iguales`)
    }
}

calcularMayor(10,20)

// No bucle. Crea una función que determine si un número es positivo, negativo o cero pasándole a la función un parámetro

function calcularValor(numero){
    if(numero<0){
        console.log(`El número ${numero} es negativo`)
    }else if(numero>0){
        console.log(`El número es positivo`)
    }else if(numero===0){
        console.log(`El número es ${numero}`)
    }
}
calcularValor(-2)





