// console.log('hola')
// console.log("🥸")
// console.log(99999)
// console.log(20)
// console.log(10+5000)
// console.log("Arbol"+"Verde")
// console.log(32>=18)
// console.log(32<=18)
// console.log(1+1)
// console.log("1"+1)
// console.log("1"+5000)

// Comentar en javascript command + Mayus + 7

// Tipos de datos

console.log('texto')        //Texto (Strings)
console.log("texto")        //Texto (Strings)
console.log( 500 )          //Número (Number)
console.log( true )         //Verdadero (Booleano)
console.log( false )        //Falso (Booleano)
console.log(['Lunes',"Martes"])  //Array o Arreglo de Strings

console.log([23,47,28])     //Array o Arreglo Numbers
console.log([53,'Jorge',false]) //Array o Arreglo con diferentes valores

//Objetos: Es un tipo de datos que veremos mas adelante
console.log(null)   //Nulo. No tiene ningún valor. No ha podido recoger valores
console.log( undefined )  //Indefinido. No tiene valor. No hemos definido ese valor
console.log(NaN)  //Not a Number (No puedo hacer la operacion matematica)

console.log(1+5)
console.log(7*2)
console.log(7+'hola')  //Result 7hola
console.log(7*'hola')   //Result NaN 

// VARIABLES

let edad
console.log(edad)
edad=15
console.group(edad)

//CONSTANTES
////No se puede definir una constante sin valor, hay que inicializar la constantes
const nombre='Pepe'
console.log(nombre)
// A una constante no se le puede modificar su valor 
console.log('programacion')

// console.log(programacion)  Esto arroja un error ya que busca una variable programacion y no esta definida


//  Funciones
// function beber(parametro){
//     console.log('bebiendo '+ parametro)
    
// }

// beber("Agua")
// beber("Vino")
// beber("Leche")

// function sumar(x,y){
//     console.log(x+y) 
//     console.log("Resultado de sumar el número " + x + " mas el número " + y)   
// }

// sumar()
// sumar(5)
// sumar(5,6)

// Objetos

const persona={
    nombre:"Angela",
    apellido:"Fernández",
    edad:25,
    pasatiempos:["Correr","Leer","Ir al cine"],
    soltera:true,
    contacto:{
        email:"angelafernandez@gmail.com",
        twitter:"@angelafernandez",
        movil:"123456789"
    }
}
console.log(persona)
// Se puede acceder 
console.log(persona["nombre"])
console.log(persona["apellido"])
// Tambien se puede acceder con punto
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.pasatiempos)
console.log(persona.pasatiempos[2])
