

function removeButton() {

    var element = document.querySelector("#join")
    element.remove();

}

function alertBtn() {

    var searchWord = document.getElementById('searchInfo').value;
    alert("You are searching for: " + '"' + searchWord + '"');

}


function like(id) {

    var likeSpan = document.querySelector(id)
    likeSpan.innerText++;

}


