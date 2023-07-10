
var count = 3;
var likes = document.querySelector(".likeCount")
console.log(likes)

function add1(){
    count ++;
    likes.innerText = count + "like(s)" 
}