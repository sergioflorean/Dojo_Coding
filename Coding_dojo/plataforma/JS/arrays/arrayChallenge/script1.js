// first challenge
function alwaysHungry(arr) {
    var foodCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if (foodCount == 0) {
        console.log("im hungry")
    }
}
// esto debería mostrar "delicioso, "delicioso"
list1 = [3.14, "food", "cake", true, "food"]
// esto debería mostrar "Tengo hambre"
list2 = [4, 1, 5, 7, 2]
alwaysHungry(list2);

// SECOND CHALLENGE
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        num = arr[i]
        if (num > cutoff) {
            filteredArr.push(num);
        }
    }
    return filteredArr;
}

list3 = [6, 8, 3, 10, -2, 5, 9];
highvalue = 5;
var result = highPass(list3, highvalue);
console.log("second challenge: " + result); // esperamos de vuelta [6, 8, 10, 9]

// THIRD CHALLENGE

function betterThanAverage(arr) {
    var sum = 0;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    total = sum / arr.length
    //console.log(total)

    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > total) {
            count++;
        }
    }
    return count;
}
list4 = [6, 8, 3, 10, -2, 5, 9]
var result = betterThanAverage(list3);
console.log("thirs challenge: " + result); // esperamos 4 de vuelta


// FOURTH CHALLENGE

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}


var result = reverse(["a", "b", "c", "d", "e"]);
console.log("fourth challenge: " + result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// FIFTH CHALLENGE

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var num1 = fibArr[fibArr.length - 1];
        var num2 = fibArr[fibArr.length - 2];
        sum = num1 + num2;
        fibArr.push(sum);

    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log("fifth challenge: " + result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]






