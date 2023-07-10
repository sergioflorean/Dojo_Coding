// Dada dos palabras retornar si una es un 
// anagrama de la otra

// function isAnagram(word1, word2) {

//     return  true || false
// }

// isAnagram('Conservadora', 'conversador') => false;

// Dado un string retornar si es un palíndromo o no

function isPalindrom(word) {
    let word2 = [];

    for (let i = word.length - 1; i >= 0; i--) {
        word2.push(word[i]);
    };

    if (word.toLowerCase() === word2.join("").toLowerCase()) {
        return true
    };
    return false
}

console.log("🚀 ~ file: index.js:26 ~ isPalindrom", isPalindrom('oso'))

// isPalindrom(oso) => true
// isPalindrom(Oso) => true
// isPalindrom(pasa) => false
