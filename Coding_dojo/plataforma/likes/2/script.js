
var count = 9;
var count2 = 12;
var count3 = 9;
var likes = document.querySelector(".likeCount")
var likes2 = document.querySelector(".likeCount2")
var likes3 = document.querySelector(".likeCount3")
console.log(likes)

function add1() {
    count++;
    likes.innerText = count + "like(s)"
}

function add11() {
    count2++;
    likes2.innerText = count2 + "like(s)"

}

function add12() {
    count3++;
    likes3.innerText = count3 + "like(s)"

}