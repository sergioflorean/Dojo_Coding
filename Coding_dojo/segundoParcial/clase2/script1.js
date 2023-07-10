function isAnagram(word1, word2) {

    /*  var string1 = word1.toLowerCase();
     console.log(string1)
     var string2 = word2.toLowerCase(); */


    var string1 = word1.toLowerCase().split('').sort().toString();
    console.log(string1)

    var string2 = word2.toLowerCase().split('').sort().toString();
    console.log(string2)

    if (string1 === string2) {
        return true
    } else {
        return false
    }

}

console.log(isAnagram('conservaDora', 'conversadora'))

// dado un string retornar si es un palindromo 

function isPalindromo(word) {

    string3 = word.toLowerCase().split('').reverse().join('');
    console.log(string3)
    console.log(word)

    if (string3 === word) {
        return true
    } else {
        return false
    }

}

console.log(isPalindromo('oso'))
console.log(isPalindromo('cacahuate'))