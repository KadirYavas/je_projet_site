// Color Switch

let colorSwitch = document.querySelector('.colorSwitch')
let btn1 = colorSwitch.querySelector('.btn1')
let btn2 = colorSwitch.querySelector('.btn2')
let bodyC = document.body
let accueil = document.querySelector('.accueil')
let h1 = accueil.querySelector('h1')
let pAcc = accueil.querySelector('p')

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

// NavScroll

let navScroll = document.querySelector('header')
let nav1 = document.querySelector('.navscroll')
let img = navScroll.querySelector('img')

window.addEventListener('scroll', () => {
    let y = window.scrollY
    if(y > 220){
        navScroll.classList.add("sticky")
        navScroll.style.top = "5"
        navScroll.style.zIndex = "2"
        img.style.float = "left"
        navScroll.style.backgroundColor = "white"
        navScroll.style.boxShadow = "1px 1px 1px #dbdbdb"
        nav1.style.marginTop = "15px"
    }
    else{
        navScroll.classList.remove("sticky")
        navScroll.style.top = ""
        navScroll.style.zIndex = ""
        img.style.float = ""
        navScroll.style.boxShadow = ""
    }
})


// Modal

let btn3 = colorSwitch.querySelector('.btn3')
let modal = document.querySelector('.modal')
let span3 = document.querySelector('.close')

btn3.addEventListener('click', () => {
    modal.style.display = "block"
})
span3.addEventListener('click', () => {
    modal.style.display = "none"
})
















// Carousel


let carousel = document.querySelector('.carousel')
let buttons = carousel.querySelector('button')
let divCarousel = document.querySelectorAll('.container')[2]
let colDivCarouselUn = divCarousel.querySelectorAll('.col-3')[0]
let colDivCarouselDeux = divCarousel.querySelectorAll('.col-3')[1]
let colDivCarouselTrois = divCarousel.querySelectorAll('.col-3')[2]
let colDivCarouselQuatre = divCarousel.querySelectorAll('.col-3')[3]
