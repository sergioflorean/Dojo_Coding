async function login(event) {
    await event.preventDefault()
    const usernameInput = document.querySelector('#userMailInput');
    const username = usernameInput.value;
    const userPasswordInput = document.querySelector('#userPasswordInput');
    const userPassword = userPasswordInput.value;

    try {
        const result = await isUserExist(username, userPassword);
        console.log(result);
    } catch (error) {
        console.error(error.value);
    }
    return false
}

function isUserExist(username, userPassword) {
    return new Promise((resolve, reject) => {
        const userMail = 'caro@gmail.com'
        const password = 'admin123'
        if (userMail == username && password == userPassword) {
            const response = {
                message: 'Usuario válido',
                userName: 'Javier Alcántara'
            }
            resolve(response)
        } else {
            const reason = {
                message: 'Usuario no válido',
                error: 'User doesnt Exist!'
            }
            reject(reason)
        }
    })
}