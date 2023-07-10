// Tipos de datos
// variable global
var saludo = 'Buenas noches ninjas';
// const y let
// const => es un valor constante
// let => es un valor que va a ir cambiando
let student = 'Gabriela';
student = 'Valentina';

console.log('student: ', student);

// Tipos de datos
// STRINGS => son cadenas de textos 
const userName = 'caritoDasilva';

// Numbers => son números;
// Operadores => + / - =
const minutes = 1 * 60;
const ageStudent1 = 40;
const ageStudent2 = 25;
var  totalAge = ageStudent1 + ageStudent2;
// console.log("🚀 ~ file: introJs.js:22 ~ totalAge:", totalAge)

// Arrays o listas
const students = ['Diego', 'José', 'Javier', 'Carol']
// Índice es la posición de un elemento en el array;
// console.log("🚀 ~ file: introJs.js:21 ~ students:", students[3]);

// Objetos
// está compuesto por llave valor
const stack = {
    stackName: 'MERN',
    instructor: 'Carolina Da Silva'
}
// console.log("🚀 ~ file: introJs.js:30 ~ stack:", stack.instructor);
// console.log("🚀 ~ file: introJs.js:30 ~ stack:", stack['stackName']);

// Funciones 
// Es un fragmento de código responsable de ejecutar una solución
// camelCase
// function hacerQueque(leche, huevos, harina) {
//     return queque;
// }
function suma(a, b, c) {
    const total = a + b + c;
    return total;
}

const sumaResult = /*suma(5, 4, 9)*/ 18;
const sumaEdades = suma(15, 23, 40);
console.log("🚀 ~ file: introJs.js:49 ~ sumaResult:", sumaResult);
