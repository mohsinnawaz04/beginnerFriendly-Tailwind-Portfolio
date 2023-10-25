var btn = document.getElementById('menu-btn')
var menu = document.getElementById('mobile-menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
})