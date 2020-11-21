var navbar = document.querySelector('.navigation');
var ham = document.querySelector('.ham');

function toggleHamburger() {
    navbar.classList.toggle('showNav')
    ham.classList.toggle('showClose')
}

ham.addEventListener('click', toggleHamburger);