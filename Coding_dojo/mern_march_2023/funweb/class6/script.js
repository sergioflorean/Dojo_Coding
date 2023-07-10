console.log('Hola chiquillos')

function getEquality(a, b) {
    let isEqual = false;
    if(a !== b) {
        isEqual = true;
    } else {
        isEqual = false;
    }
    return isEqual;
}

// Scope o alcance


console.log(getEquality(1, '1'));
console.log(isEqual);

// Evento onclick
function sayHi() {
    alert('Hola a todos!')
}

function changeTextColor(element) {
    console.log("🚀 ~ file: script.js:25 ~ changeTextColor ~ element:", element.style.color)
    if(element.style.color === 'blueviolet') {
        element.style.color = 'red';
    } else {
        element.style.color = 'blueviolet';
    }
    
}

function getTextFromInput() {
    const value = document.getElementById('input').value;
    console.log("🚀 ~ file: script.js:36 ~ getTextFromInput ~ value:", value)
}

function showAndDisappear(isOnce) {
    const element = document.getElementById('btn1')
    console.log("🚀 ~ file: script.js:40 ~ showAndDisappear ~ element:", element.className)
    if (element.className === 'button-show') {
        element.className = 'button-none'
    } else {
        element.className = 'button-show';
    }
    if (isOnce) {
        setTimeout(() => {
            showAndDisappear(false);
        }, 1000);
    }
    
}

function changeImage(element) {
    let image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZyz0RMRgacglHr5hdHYEbJekMMgPp9NYpw&usqp=CAU';
    if(element.src === image2) {
        element.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSbJxnexNrUiJ-L_qBzR-lhnvG4lC9l2XZGg&usqp=CAU'
    } else {
        element.src = image2
    }
}

function sendComment(event) {
    event.preventDefault(); 
    // Estos son los elementos que vienen del html y los guardo en variables
    const postContainer = document.getElementById('postContainer');
    const commentInput = document.getElementById('commentInput');

    // Voy a crear nuevos elementos
    const rowPost = document.createElement('div');
    const postDiv = document.createElement('div');
    const textPost = document.createElement('p');
    const textNodePost = document.createTextNode(commentInput.value);

    // Armado del post
    textPost.appendChild(textNodePost);
    postDiv.appendChild(textPost);
    rowPost.appendChild(postDiv);
    postContainer.prepend(rowPost);

    // Agregar los estilos
    rowPost.classList.add('row');
    postDiv.classList.add('col');

    commentInput.value = '';
}
