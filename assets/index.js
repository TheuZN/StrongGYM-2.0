function menuShow() {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile').src = "assets/img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-mobile').src = "assets/img/close.svg";
    }
}

function closeMenu() {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile').src = "assets/img/menu.svg";
    }
}



