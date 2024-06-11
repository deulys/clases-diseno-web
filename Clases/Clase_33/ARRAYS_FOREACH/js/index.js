'use strict'

/* 
    ARRAYS
*/

/* let semana=['Lunes','Martes','Miércoles','Jueves','Viernes','Sabado','Domingo']

console.log(semana)
console.table(semana)

console.log(semana[0])
console.log(semana[1])
console.log(semana[2])
console.log(semana[3])
console.log(semana[4])
console.log(semana[5])
console.log(semana[6])


console.log(semana.length)

let libros = ["Harry Potter", "Cien años de soledad", "El Señor de los Anillos", "Orgullo y Prejuicio", "1984", "Don Quijote de la Mancha", "Crimen y Castigo"];

console.table(libros)
console.log(libros[0])
console.log(libros[1])
console.log(libros[2])
console.log(libros[3])
console.log(libros[4])
console.log(libros[5])
console.log(libros[6])

let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Friends", "The Crown", "The Mandalorian", "The Office"];

console.table(series)
console.log(series[0])
console.log(series[1])
console.log(series[2])
console.log(series[3])
console.log(series[4])
console.log(series[5])
console.log(series[6])


let peliculas = ["Pulp Fiction", "The Shawshank Redemption", "Inception", "The Dark Knight", "Forrest Gump", "The Godfather", "Titanic"];

console.table(peliculas)
console.log(peliculas[0])
console.log(peliculas[1])
console.log(peliculas[2])
console.log(peliculas[3])
console.log(peliculas[4])
console.log(peliculas[5])
console.log(peliculas[6])

let videojuegos = ["The Legend of Zelda: Breath of the Wild", "Red Dead Redemption 2", "The Witcher 3: Wild Hunt", "Super Mario Odyssey", "Overwatch", "Fortnite", "Minecraft"];

console.table(videojuegos)
console.log(videojuegos[0])
console.log(videojuegos[1])
console.log(videojuegos[2])
console.log(videojuegos[3])
console.log(videojuegos[4])
console.log(videojuegos[5])
console.log(videojuegos[6])

let comidas = ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers", "Curry", "Salad"];

console.table(comidas)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
console.log(comidas[5])
console.log(comidas[6])
 */

/* 
    Métodos de los arrays

    -   foreach
    -   map
    -   filter
    -   find
    -   some
    -   every
    -   reverse
    -   join
    -   split
    -   includes
*/


/* let semana=['Lunes','Martes','Miércoles','Jueves','Viernes','Sabado','Domingo']

console.log(semana)

semana.forEach(function(eachDia,index){
    console.log(eachDia)
})


let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Friends", "The Crown", "The Mandalorian", "The Office"];

console.table(series)

series.forEach(function(eachSeries,index){
    console.log(series[index])

})

let coches = ["Toyota", "Ford", "Chevrolet", "Honda", "BMW", "Audi", "Mercedes-Benz", "Volkswagen", "Nissan", "Hyundai", "Kia", "Tesla", "Subaru", "Mazda", "Lexus", "Ferrari", "Porsche", "Jeep", "Land Rover", "Volvo"];

console.table(coches)
coches.forEach(function(eachCoches,index){
    console.log(eachCoches)
})

let equiposFutbol = ["Real Madrid", "Barcelona", "Manchester United", "Bayern Munich", "Liverpool", "Juventus", "Paris Saint-Germain", "Chelsea", "Arsenal", "Manchester City", "AC Milan", "Inter Milan", "Borussia Dortmund", "Atletico Madrid", "Ajax", "River Plate", "Boca Juniors", "Flamengo", "Santos", "São Paulo"];

console.table(equiposFutbol)

equiposFutbol.forEach(function(eachEquiposFutbol,index){
    console.log(eachEquiposFutbol)
})



let paises = ["España", "Francia", "Italia", "Alemania", "Reino Unido", "Estados Unidos", "Japón", "Brasil", "Argentina", "México", "Canadá", "Australia", "China", "India", "Rusia", "Sudáfrica", "Egipto", "Arabia Saudita", "Corea del Sur", "Nueva Zelanda"];

console.table(paises)

paises.forEach(function(eachPaises,index){
    console.log(eachPaises)
})

let ciudades = ["Madrid", "París", "Roma", "Berlín", "Londres", "Nueva York", "Tokio", "Sídney", "Río de Janeiro", "Dubái", "Ciudad de México", "Toronto", "Pekín", "Mumbai", "Moscú", "El Cairo", "Riyadh", "Seúl", "Auckland", "Barcelona"];

console.table(ciudades)

ciudades.forEach(function(eachCiudades,index){
    console.log(eachCiudades)
})

let frutas = ["Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Pera", "Kiwi", "Piña", "Mango", "Sandía", "Melón", "Cereza", "Limón", "Papaya", "Coco", "Granada", "Higo", "Pitahaya", "Guayaba", "Ciruela"];

console.table(frutas)
frutas.forEach(function(eachFrutas,index){
    console.log(eachFrutas)
}) */

/* console.dir(cuadrado)

cuadrado.style.width='100px'
cuadrado.style.height='100px'
cuadrado.style.backgroundColor='red'

triangulo.style.width='200px'
triangulo.style.height='100px'
triangulo.style.backgroundColor='orange'

pentagono.style.width='100px'
pentagono.style.height='100px'
pentagono.style.backgroundColor='cyan'

hexagono.style.width='300px'
hexagono.style.height='100px'
hexagono.style.backgroundColor='yellow'

heptagono.style.width='50px'
heptagono.style.height='25px'
heptagono.style.backgroundColor='green'

manzana.style.width='150px'
manzana.style.height='100px'
manzana.style.backgroundColor='pink'

pera.style.width='100px'
pera.style.height='100px'
pera.style.backgroundColor='black'

naranja.style.width='120px'
naranja.style.height='60px'
naranja.style.backgroundColor='aqua'

melon.style.width='300px'
melon.style.height='120px'
melon.style.backgroundColor='blue'

sandia.style.width='60px'
sandia.style.height='120px'
sandia.style.backgroundColor='brown' */


/* 
    DOM 
    Document Object Model

    Es una API disponible en el navegador con la que podemos interactuar

*/

/* const cuadrado=document.querySelector('#cuadrado')
console.log(cuadrado)
cuadrado.style.width='100px'
cuadrado.style.height='100px'
cuadrado.style.background='red' */


/* Con querySelectorAll Se selcciona todas los elemneto con un nombre de clase */
/* const circulos=document.querySelectorAll('.circulo')
console.log(circulos) */
/* circulo.style.width='100px'
circulo.style.height='100px'
circulo.style.backgroundColor='red' */

/* circulos.forEach(function(eachCirculos,index){
    circulos[index].style.width='100px'
    circulos[index].style.height='100px'
    circulos[index].style.background='aqua'
    if(index<=10){
        circulos[index].style.background='red'
    }else if(index>10 && index<=20){
        circulos[index].style.background='orange'
    }else{
        circulos[index].style.background='green'
    }
})  
 */


const rombos=document.querySelectorAll('.rombo')

rombos.forEach(function(eachRombos,index){
    if(index % 2===0){
        rombos[index].style.width='100px'
        rombos[index].style.height='100px'
        rombos[index].style.background='black'
        rombos[index].style.marginBottom='5px'
    }else{
        rombos[index].style.width='150px'
        rombos[index].style.height='50px'
        rombos[index].style.background='red'
        rombos[index].style.marginBottom='10px'
    }
    /* Puedes ser varios eventos revisar MDN
 */
    rombos[index].addEventListener('click',function(){
        this.style.background='yellow'
        this.style.width='20px'
        this.style.height='100px'
    })
    

})

console.log('********************************Elementos del documento********************************')
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)

