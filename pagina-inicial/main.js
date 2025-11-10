const menuMobile = document.getElementById('menu-mobile');
const nav = document.getElementById('nav-barra');
const btnFechar = document.getElementById('btn-fechar');

function toggleMenu() {
    nav.classList.toggle('ativo');
}

menuMobile.addEventListener('click', toggleMenu);
btnFechar.addEventListener('click', toggleMenu);