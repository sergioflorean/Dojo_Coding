function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];
    console.log("🚀 ~ file: script.js:7 ~ quicksort ~ pivot:", pivot)


    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot
            ? left.push(array[i])
            : right.push(array[i]);
            console.log("🚀 ~ file: script.js:11 ~ quicksort ~ left:", left)
            console.log("🚀 ~ file: script.js:11 ~ quicksort ~ right:", right)
           

    }

    return quicksort(left).concat(pivot, quicksort(right));
};

let unsorted = [23, 45, 16, 37, 3, 99, 22, 5, 345, -454, -54, -3, 0];
let sorted = quicksort(unsorted);


console.log("unsorted:", unsorted)
console.log('Sorted array', sorted);