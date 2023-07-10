// Hoisting
// var magicalUnicorns;
// console.log(magicalUnicorns);
// const magicalUnicorns = "awesome";

var foo = "bar";
magic();

function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
console.log(foo);
