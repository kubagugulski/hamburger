const burger = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const menu = () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
    bars.classList.toggle('hide')
    close.classList.toggle('hide')
}

burger.addEventListener('click', menu)