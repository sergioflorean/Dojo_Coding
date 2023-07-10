//mapping

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log("🚀 ~ file: script.js:8 ~ groceryList:", groceryList)


//filter
const values1 = [1, 2, 3, 4, 5];
const evens = values1.filter( val => val % 2 === 0 );
console.log("🚀 ~ file: script.js:11 ~ evens:", evens)


const groceries1 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries1.filter( item => item.includes("o") );
console.log("🚀 ~ file: script.js:16 ~ oFoods:", oFoods)

const values2 = [1, 2, 3, 4, 5];
const oddCubes = values2.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log("🚀 ~ file: script.js:24 ~ oddCubes:", oddCubes)





