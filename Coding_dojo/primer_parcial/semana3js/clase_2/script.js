
console.log('hola')

let isEqual = false;
function getEquality(a, b){
    let isEqual;
    if (a === b){
        isEqual = true;
    } else{
        isEqual = false;
    }
    return isEqual;
}

console.log(isEqual);
console.log(getEquality(1,'1'));

//segundo ejempl

function sayHi(){
    alert('hola a todos');
}

function changeTextcolor(element){
    element.style.color = red;
}
