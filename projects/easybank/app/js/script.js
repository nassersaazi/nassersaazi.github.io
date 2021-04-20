
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body'); 

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if (header.classList.contains('open')) {
        body.classList.remove('no-scroll');
        header.classList.remove('open');// close hamburger menu
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    } else {
        body.classList.add('no-scroll');
        header.classList.add('open');// open hamburger menu
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})