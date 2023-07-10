var displayText = document.getElementById("display");
var num1 = "";
var num2 = "";
var opSign = "";




function press(num) {

    num1 = num1 + num;
    displayText.innerText = num1;
    console.log(num1);


}





function setOP(operador) {
    if(num1 == ""){
        num1 = "0"
    }

    opSign = operador;
    num2 = num1;
    num1 = "";

    console.log(opSign);
    console.log(num1);
    console.log(num2);


}

function calculate() {
    var x = parseFloat(num2)
    var y = parseFloat(num1)

    switch (opSign) {
        case "/":
            result = x / y
            break
        case "*":
            result = x * y
            break
        case "+":
            result = x + y
            break
        case "-":
            result = x - y
            break
    }

    console.log(result);
    displayText.innerText = result
    num1 = result
    opSign = ""

}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    displayText.innerText = "0";
}

