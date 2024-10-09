const menuBtn = document.querySelector(".menu");
const sideNav = document.querySelector(".side-nav")
const exit = document.querySelector(".exit")
let prev = null

menuBtn.addEventListener("click",menuOPen)

exit.addEventListener("click", menuClose)

function menuOPen() {
 sideNav.classList.add("side-add")
 
}

function menuClose() {
    sideNav.classList.add("side-exit")
    
}