'use strict'


console.log("Hola mundo") /* 1.  */

let numero=12 /*  2. */

let variable1=20, variable2=25/*  3. */

console.log(variable1+variable2)


let variableString="Mi Nombre es Deulys"/*  4. */
console.log(variableString.length)

let mascotas=[100,20,60,-67,10,12] /* 5. */
console.log(mascotas[0])

function sumarNumeros(){ /* 6. */
    let numero1=15,numero2=40
    return numero1+numero2

}
console.log(sumarNumeros()) /* 7. */

let valorBooleano=true
console.log(valorBooleano)

function determinarValor(valor){ /* 8. */
    if(valor % 2===0){
        console.log(`El número ${valor} es par`)
    }else{
        console.log(`El número ${valor} es impar`)
    }

}
determinarValor(15)

let medico={ /* 9. */
    nombre:'Carmen',
    apellido:'Gutierrez',
    edad:49,
    especialidad:'Pediatra',
    horario:'de 9 am a 1 pm'
}

console.log(`La Doctora ${medico.nombre} ${medico.apellido} tiene ${medico.edad} años ella es ${medico.especialidad} y atiende de lunes a viernes ${medico.horario} `)

let arregloNombre= /* 10. */
    [
        "Carmen",
        "Ana",
        "Josefa",
        "Carlos",
        "Miguel",
        "Mathias"
    ]
console.log(arregloNombre.length)

function obtenerMayor(num1, num2) { /* 11. */
    if(num1 > num2) {
        console.log(`El número ${num1} es mayor que ${num2}`)
        return num1
    }else{
        console.log(`El número ${num2} es mayor que ${num1}`)
        return num2
    }
}
// obtenerMayor(30, 4)
console.log(obtenerMayor(1000, 900))

function cuadradoNumero(numero){/* 12. */
    return numero*numero
}
console.log(cuadradoNumero(12))

function calcularAreTriangulo(base,altura){
    return (base*altura)/2
}
console.log(calcularAreTriangulo(12,3))