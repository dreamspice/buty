const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const mainSection = document.getElementById('main-section');
const headerSection = document.getElementById('header-section');
const closeButton = document.getElementById('close-button');
const logo = document.getElementById('logo');
const actualCount = document.getElementById('actual-count');
const cartButton = document.getElementById('cart-button');
const cartSection = document.getElementById('cart-section');

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

let count = 0

function openMenu() {
        hamburgerButton.classList.remove('transition-1');
        logo.classList.remove('transition-1');
        hamburgerButton.classList.add('transition-0');
        logo.classList.add('transition-0');
        gsap.fromTo('#mobile-menu', {duration: 1, y: 1200, opacity: 0}, {duration: 1, y: 0, opacity: 1});
        mobileMenu.style.display = 'block';
        mobileMenu.style.visibility = 'visible';
        headerSection.classList.add('gray-scale');
        mainSection.classList.add('gray-scale');
}

function closeMenu() {
        hamburgerButton.classList.remove('transition-0');
        logo.classList.remove('transition-0');
        hamburgerButton.classList.add('transition-1');
        logo.classList.add('transition-1');
        gsap.fromTo('.phone-menu', {duration: 1, y: 0, opacity: 1}, {duration: 2, y: 1200, opacity: 0});
        headerSection.classList.remove('gray-scale');
        mainSection.classList.remove('gray-scale');
}

plusButton.addEventListener('click', increment);
minusButton.addEventListener('click', decrement);

function increment() {
    count ++;
    actualCount.textContent = count;
}

function decrement() {
    if(count > 0) {
    count --;
    actualCount.textContent = count;
    }
}

cartButton.addEventListener('click', openCart);

let clicked = false;

function openCart() {
    if(clicked === false) {
        clicked = true;
        cartSection.classList.remove("transition-0");
        cartSection.classList.add("transition-1");
        cartSection.style.visibility = 'visible';
    } else {
        cartSection.classList.remove("transition-1");
        cartSection.classList.add("transition-0");
        cartSection.style.visibility = 'hidden';
        clicked = false;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  if (n > slides.length) {
    slideIndex = 1
}
  if (n < 1) {
    slideIndex = slides.length
}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
  }
}