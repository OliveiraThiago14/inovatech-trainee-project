var header = document.getElementById('header-content');
var navigation = document.getElementById('bar-navigation');
var showSideBar = false;



function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        navigation.style.marginLeft = '-15vw';
        navigation.style.animationName = 'showSideBar';
    }
    else {
        navigation.style.marginLeft = '-100vw';
        navigation.style.animationName = '';
    }
}

menuMobile.addEventListener('click', toggleMenu);
btnFechar.addEventListener('click', toggleMenu);