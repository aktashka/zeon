let menuBtn = document.querySelector('.burger-menu');
let headerNavList = document.querySelector('.header-nav-list');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    headerNavList.classList.toggle('active');
})