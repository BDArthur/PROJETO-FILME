const navOpenbtn = document.querySelector("[data-menu-open]")
const navClosebtn = document.querySelector("[data-menu-close]")
const navBar = document.querySelector("[data-navbar]")
const overlay = document.querySelector("[data-overlay]")

const nav = [navOpenbtn, navClosebtn, overlay];

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click', function () {
        navBar.classList.toggle("active")
    })
}