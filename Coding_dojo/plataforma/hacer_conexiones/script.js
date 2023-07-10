

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connectionCount");






function changeName() {
    var janesName = document.querySelector("#changeName");
    //mi solución que no funciona 
    
    janesName.innerText = "Sergio Florean"
    console.log(janesName) 

    // solución que funciona 
    /* if(janesName.innerText === "Jane Doe") {
        janesName.innerText = "Nombre 2";
    }else{
        janesName.innerText = "Jane Doe";
    }     */
    
}


function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;

}
function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;

}