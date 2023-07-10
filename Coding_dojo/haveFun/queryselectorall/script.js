/* var pTag = document.querySelectorAll("p");

function getColor(element) {
    console.log(element.value);
    for (var i = 0; i < pTag.length; i++) {
        pTag[i].style.color = element.value;
    }

} */

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);       
