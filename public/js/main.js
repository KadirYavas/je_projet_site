// Color Switch

let colorSwitch = document.querySelector('.colorSwitch')
let btn1 = colorSwitch.querySelector('.btn1')
let btn2 = colorSwitch.querySelector('.btn2')
let bodyC = document.body
let accueil = document.querySelector('.accueil')
let h1 = accueil.querySelector('h1')
let pAcc = accueil.querySelector('p')
console.log(h1)

btn2.addEventListener('click', () => {
    bodyC.style.backgroundColor = "#242323"
    btn1.style.backgroundColor = "white"
    bodyC.style.color = "white"
    h1.style.color = "black"
    pAcc.style.color = "black"
})
btn1.addEventListener('click', () => {
    bodyC.style.backgroundColor = "white"
    bodyC.style.color = ""
    h1.style.color = "#212529"
    pAcc.style.color = "#212529"
})

















// Carousel


let carousel = document.querySelector('.carousel')
let buttons = carousel.querySelector('button')
let divCarousel = document.querySelectorAll('.container')[2]
let colDivCarouselUn = divCarousel.querySelectorAll('.col-3')[0]
let colDivCarouselDeux = divCarousel.querySelectorAll('.col-3')[1]
let colDivCarouselTrois = divCarousel.querySelectorAll('.col-3')[2]
let colDivCarouselQuatre = divCarousel.querySelectorAll('.col-3')[3]
