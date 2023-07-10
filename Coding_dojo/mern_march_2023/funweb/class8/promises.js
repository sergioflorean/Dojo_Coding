// Promesas están desarrolladas para el manejo de los procesos
//  asíncronos
const userMailInput = 'caro@gmail.com';/*document.getElementById('userMailInput').value;*/
const userPasswordInput = 'admin123';/*document.getElementById('userPasswordInput').value;*/


const isUserExist = new Promise(
    function(resolve, reject) {
        const userMail = 'caro@gmail.com';
        const password = 'admin123';
        if (userMail === userMailInput && password === userPasswordInput) {
            const response = {
                message: 'Usuario válido',
                userName: 'Carolina Da Silva'
            };
            resolve(response);
        } else {
            const reason = {
                message: 'Usuario no válido',
                error: 'User doesnt exist!'
            };
            reject(reason);
        }
    }
);

const login = function() {
    isUserExist
        .then(function(response) {
            console.log("me resolví bien", response);
        })
        .catch(function(error) {
            console.log("soy un error", error);
        });
}

// Tarea:

// Conectar formulario con la función login()

// Pasar función de login a ES7 - Async/Await

// login();
