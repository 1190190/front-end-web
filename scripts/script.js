// JavaScript Document
console.log("hi");

// Hamburger variablen
var button = document.querySelector("nav > section > button")
var nav = document.querySelector("nav")

// Carousel variabelen
var bigImage = document.querySelector(".product-pagina main>section:nth-of-type(2) > figure img");
var carouselImages = document.querySelectorAll('.product-pagina main>section:nth-of-type(2) > section img');

// audio button variabelen
var audioThanks = new Audio('/audio/thank-you.mp3')
var audiobutton = document.querySelector('.audio')

// Toggle Menu
button.addEventListener('click', toggleMenu);

// Carousel event listener voor elke image
carouselImages.forEach(eenClickbareImage => {
    console.log(eenClickbareImage);
    eenClickbareImage.addEventListener('click', updateBigImage)
});

// Pakt de src uit de geklikte afbeelding door middel van de target en 
// plak daarna de src over de src van de grote afbeelding
function updateBigImage(event){
    bigImage.src =  event.target.src;
}

// doormiddel van toglle kan je blijven klikken en zal de css 
// (hamburger open en dicht) aangesproken worden. 
function toggleMenu() {
    nav.classList.toggle("toon-menu")
    console.log("jippie ja jee")
}

// pakt de button als er op geklikt is en dan laat dan audio afspelen. 
audiobutton.addEventListener('click', function () {
    audioThanks.play();
    console.log("jij gehoord?");
  })