/*
Para cada número que sea múltiplo de 3 , imprima  "Fizz"
Para cada número que sea múltiplo de 5 , imprima  "Buzz"
Para los números que son múltiplos de 3 y 5, imprima  "FizzBuzz"
Todos los demás números deberían imprimirse de forma normal 
*/

for (var i = 1; i<101;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    }else if(i % 5 == 0){
        console.log("buzz")
    }else if (i % 3 == 0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }

}