let menuBurger = document.querySelector('.burger-menu');
let headerNavList = document.querySelector('.header-nav-list');



menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('active');
    headerNavList.classList.toggle('active');
    
})

