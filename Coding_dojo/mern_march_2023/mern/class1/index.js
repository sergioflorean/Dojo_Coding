// Desestructuración

const student = {
    fullName: 'José Urdaneta',
    age: 30,
    stack: 'MERN'
}

const { fullName } = student;

const props = {
    city: 'Valdivia',
    country: 'Chile',
    street: 'km7'
}

const city = 'Alemania';

// const { city: cityStudent, country, street } = props;
const { city: cityStudent, ...restProps } = props;
console.log("🚀 ~ file: index.js:21 ~ restProps:", restProps)

// console.log("🚀 ~ file: index.js:18 ~ city:", city)
// console.log(city);
// console.log(cityStudent)

// console.log(`Mi nombre es ${fullName}`);

const students = ['Gaby', 'Javier', 'Fernanda', 'Valentina'];

//Spread y rest 
// Sirve para hacer copias de objetos y arrays;

const [, first, second, ...rest] = students;
// console.log("🚀 ~ file: index.js:29 ~ rest:", rest)
const newStudentsList = [...students, 'Gianni']
// console.log("🚀 ~ file: index.js:30 ~ newStudentsList:", newStudentsList)
// console.log("🚀 ~ file: index.js:26 ~ first:", first)
const studentCopy = { ...student, fullName: 'Sergio', hobbie: 'Saltar la cuerda' };

// console.log("🚀 ~ file: index.js:38 ~ studentCopy:", studentCopy)

// Funciones de flecha

function oldSuma() {
    return 2 + 4;
}

// console.log(oldSuma());

const suma = () => 2 + 4;

// console.log(suma());

// Operador ternario

const firstName = 'Caro';

const lastName = firstName !== '' ? 'Da Silva' : '';

const fullName2 = lastName !== '' && 'Caro Da Silva'
console.log("🚀 ~ file: index.js:60 ~ lastName:", fullName2)
