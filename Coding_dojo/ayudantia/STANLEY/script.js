var miResultado = 0;

function miSuma(sumando) {  // 10
    miResultado = sumando + 1
    console.log(miResultado)
    return (miResultado + 1)
}

console.log(miResultado);
miResultado = miSuma(10)
console.log(miResultado)

//unaVariable = elReturndeLaFuncion(elParametro)

/*seleccionar el elemnto HTML */

var mihtmlSaludo = document.querySelector("#saludo");

console.log(mihtmlSaludo);
console.log("mihtmlSaludo");
console.log('mihtmlSaludo');

/* mihtmlSaludo.innerText = "hi i'm Susy!"
 */
/* mihtmlSaludo.style.color = 'pink';
 */
/*eliminaredad*/

var mihtmlEdad = document.querySelector("#edad");

/* mihtmlEdad.style.display = 'none';
 */
/* mihtmlEdad.remove();
 */
/* mihtmlEdad.style.visibility = 'hidden';
 */
/* 1.-escoger imagen */

var mihtmlImagen = document.querySelector('#centrado img')
console.log(mihtmlImagen);

/*2.-cambiar imagen*/

/* mihtmlImagen.src = "./imagenes/lucy.png";
 */
/*3.-agregar manejador de evento para cambiar imagen de manera dinamica */

mihtmlImagen.addEventListener('mouseover', cambiarImagen)

/*4.- definir que ocurre al hacer hover */

function cambiarImagen() {

    mihtmlImagen.src = "./imagenes/lucy.png";
    mihtmlEdad.style.visibility = 'hidden';
    mihtmlSaludo.style.color = 'pink';
    mihtmlSaludo.innerText = "hi i'm Susy!"

}


mihtmlImagen.addEventListener('mouseleave', cambiarImagen2)

const fraseHtml = document.querySelector("#dialogo")

function cambiarImagen2() {

    fraseHtml.innerHTML = ""

    mihtmlImagen.src = "https://cdn.discordapp.com/attachments/1083062022809329664/1087881450956804136/user.png";
    mihtmlEdad.style.visibility = 'visible';
    mihtmlSaludo.style.color = 'black';
    mihtmlSaludo.innerText = "hi i'm Stanley!"

}





function hablar(texto) {

    fraseHtml.innerHTML = fraseHtml.innerHTML + "<br>" + texto




}

hablar("hola")


let stanleyHtml = document.getElementById("header_left");

function ensusisy() {

    stanleyHtml.innerText = "sussy";
    console.log(stanleyHtml);
}


function ensuciar(element) {

    element.innerText = "sussy";

}













