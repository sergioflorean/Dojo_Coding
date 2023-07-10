const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);


/* const bListPkmn = pokemon.filter(p => p.name[0] === "B");
console.log("🚀 ~ file: script.js:29 ~ bListPkmn:", bListPkmn)
const pkmnIds = pokemon.map(p => p.id)
console.log("🚀 ~ file: script.js:31 ~ pkmnIds:", pkmnIds) */

//divisible entre 3
const pokemon3 = pokemon.filter(p => p.id % 3 == 0);
console.log("🚀 ~ file: script.js:35 ~ pokemon3:", pokemon3)

//objet tipo fuego 
const firePkmn = pokemon.filter(p => p.types.includes('fire'));
console.log("🚀 ~ file: script.js:39 ~ firePkmn:", firePkmn)

//mas de un tipo 
const type2pkmn = pokemon.filter(p => p.types.length > 1);
console.log("🚀 ~ file: script.js:43 ~ type2pkmn:", type2pkmn)

// solo los nombres
const pkmnName = pokemon.map(p => p.name);
console.log("🚀 ~ file: script.js:46 ~ pkmnName:", pkmnName)

//nombre pokemon + > 99

const name99 = pokemon.filter(p => p.id > 99).map(p => p.name)
console.log("🚀 ~ file: script.js:52 ~ name99:", name99)

//unico tipo veneno

const venom = pokemon.filter(p => p.types.length === 1 && p.types.includes('poison')).map(p => p.name)
console.log("🚀 ~ file: script.js:57 ~ venom:", venom)

//segundo tipo voladro

const flyingPkmn = pokemon.filter(p=>p.types.includes('flying')).map(p=>p.types[0])
console.log("🚀 ~ file: script.js:62 ~ flyingPkmn:", flyingPkmn)

const normal = pokemon.filter(hola=>hola.types.includes('normal')).length;
console.log(normal)









