// promesas estan desarrolladas para el manejo de procesos asincronos

const userNameInput =  /* "caro@gmail.com" */ document.getElementById('userMailInput');
const username = userNameInput.value;
const userPasswordInput = /* "admin123" */document.getElementById('userPasswordInput');
const varPassword = userPasswordInput.value;

console.log(username.value);
console.log(varPassword.value);

const isUserExist = new Promise(
    function (resolve, reject) {
        
        const userName = 'caro@gmail.com';
        const password = 'admin123';
        if (userName === username && password === varPassword) {
            const response = {
                message: 'usuario valido',
                userName: 'carolina da silva'
            };
            resolve(response);
        } else {
            const reason = {
                message: 'usuario no valido',
                error: 'user doesnt exist'
            };
            reject(reason);
        }
    }


)

const login = function () {
    
    isUserExist
        .then(function (response) {
            console.log("me resolvi bien", response);
        })
        .catch(function (error) {
            console.log("error", error);
        });
}
login();
