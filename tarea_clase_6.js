//Tarea 1

let array = ["a", "b", "c"]; 

array.push("d");
console.log(array);
array.pop();
console.log(array);
array.unshift("Z");
console.log(array);
array.shift();
console.log(array);

console.log("--------------");
//Tarea 2
let array2 = ["a", "b", "c", "d", "e"];
console.log("array 2: ", array2);
let arrayNuevo2a = array2.slice(2, 4);
console.log(arrayNuevo2a);
console.log("array 2: ", array2);
let arrayNuevo2b = array2.splice(0, 2);
console.log(arrayNuevo2b);
console.log("array 2: ", array2);
let arrayNuevo2c = array2.splice(1, 0, "z", "x");
console.log("array 2 insert : ", array2);

console.log("--------------");
//Tarea 3

let array3 = ["a", "b", "c"];

let array3JoinFlecha = array3.join("->");
console.log("join -> : ", array3JoinFlecha);
let array3JoinPunto  = array3.join(".");
console.log("join . : ", array3JoinPunto);
console.log("split a.b.c en punto ", "a.b.c".split("."));

console.log("split 5.4.3.2.1 en punto ", "5.4.3.2.1".split("."));

console.log("--------------");
//tarea 4

let colores = ["rojo", "azul", "verde", "amarillo"];

colores.push("negro", "blanco");
colores.pop();
colores.shift();
colores.unshift("anaranjado");
colores.reverse();
colores.sort();
colores.slice(1, 3);
colores.slice(2);
colores.splice(1, 0, 'pepe');
colores.splice(2, 1, "morado", " violeta");
console.log("arreglo colores final: ", colores);

console.log("--------------");
//tarea 5

let listaNumeros = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6]

let numeros = [];

for (let i = 0; i < listaNumeros.length; i++) {
  var currentNumber = listaNumeros[i];
  if (currentNumber > 10) {
    numeros.push(currentNumber)
  }
}

console.log("Números post filtro: ", numeros);

console.log("--------------");
//Tarea 6

let numerosString = ["20", "515", "800"];

let numerosInt = numerosString.map(function(numeroComoString){
	return parseInt(numeroComoString);
});
console.log("Desde arreglo con numeros string a numeros", numerosInt);

console.log("--------------");
//Tarea 7

let estudiantes = [
  {
    nombre: 'Alvaro',
    puntos: 10,
  },
  {
    nombre: 'Daniel',
    puntos: 16,
  },
  {
    nombre: 'Alexys',
    puntos: 12,
  },
  {
    nombre: 'Rafa',
    puntos: 17,
  },
  {
    nombre: 'Alejandro',
    puntos: 8,
  },
  {
    nombre: 'Sofia',
    puntos: 9,
  }
]

let aprobados = estudiantes.filter(estudiante => estudiante.puntos >= 11);
console.log("alumnos aprobados: ", aprobados);

let alumno = estudiantes.find(alumno => alumno.puntos > 10);
console.log("Alumno con puntaje mayor a 10: ", alumno.nombre);

console.log("--------------");
//tarea 8

let caricaturas = [ {
    nombre: "The Simpsons",
    genero: "Animacion",
    anio: "1986",
    personajes: [ "Homero", "Marge", "Bart", "Lisa", "Maggie" ]
}, { 
    nombre: "Snoopy",    
    genero: "Animacion",
    anio: "1980",
    personajes: ["Charles", "Snoopy", "Lucía", "Woody"]
} ];
 
let caricaturas2 = caricaturas.slice(0, 1);
 
console.log("Caricaturas: ",caricaturas ); 
console.log("Caricaturas luego de slice: ", caricaturas2); 