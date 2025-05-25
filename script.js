/* swiper image*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set 'translateZ(-400px)' on previous slides
            translate: [0, 0, -400],
        },
        next: {
             // will set 'translateZ(-100%)' on next slides
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: 'horizontal',
    autoplay: {
        delay: 5000,
    },
    speed: 480,
    spaceBetween: 100,
});


// Navbar interactivity
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Close Button for Login
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
