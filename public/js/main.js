// Color Switch

let colorSwitch = document.querySelector('.colorSwitch')
let btn1 = colorSwitch.querySelector('.btn1')
let btn2 = colorSwitch.querySelector('.btn2')
let bodyC = document.body
let accueil = document.querySelector('.accueil')
let h1 = accueil.querySelector('h1')
let pAcc = accueil.querySelector('p')
let navNoir = document.querySelector('header')

btn2.addEventListener('click', () => {
    bodyC.style.backgroundColor = "#242323"
    btn1.style.backgroundColor = "white"
    bodyC.style.color = "white"
    h1.style.color = "black"
    pAcc.style.color = "black"
    navNoir.style.backgroundColor = "white"
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
let modalins = document.querySelector('.modalinscription')
let btnins = modal.querySelectorAll('.btnmodal')[0]
let btninsco = modal.querySelectorAll('.btnmodal')[1]
let spanins = document.querySelector('.close2')
let btnco = document.querySelectorAll('.btnmodal2')[0]
let btncoins = document.querySelectorAll('.btnmodal2')[1]
let resultat

let input1ins = modal.querySelectorAll('input')[0]
let input2ins = modal.querySelectorAll('input')[1]

let input1co = modalins.querySelectorAll('input')[0]
let input2co = modalins.querySelectorAll('input')[1]
let input3co = modalins.querySelectorAll('input')[2]
let input4co = modalins.querySelectorAll('input')[3]

btn3.addEventListener('click', () => {
    modal.style.display = "block"
})
span3.addEventListener('click', () => {
    modal.style.display = "none"
})
btnins.addEventListener('click', () => {
    modalins.style.display = "block"
    modal.style.display = "none"
    input1ins.value = ""
    input2ins.value = ""
})
spanins.addEventListener('click', () => {
    modalins.style.display = "none"
})
btnco.addEventListener('click', () => {
    modal.style.display = "block"
    modalins.style.display = "none"
    input1co.value = ""
    input2co.value = ""
    input3co.value = ""
    input4co.value = ""
})
btncoins.addEventListener('click', () => {
    modalins.style.display = "none"
    resultat = window.confirm('Merci pour votre inscription, continuez avec la fenetre de connexion ?')
    if(resultat == true){
        modal.style.display = "block"
    }
    else{

    }
    input1co.value = ""
    input2co.value = ""
    input3co.value = ""
    input4co.value = ""
})
btninsco.addEventListener('click', () => {
    modal.style.display = "none"
    alert('Merci pour votre connexion !')
    input1ins.value = ""
    input2ins.value = ""
})




// Carousel


let carousel = document.querySelector('.carouselbtn')
let buttons = carousel.querySelectorAll('.rond')[0]
let buttons1 = carousel.querySelectorAll('.rond')[1]
let buttons2 = carousel.querySelectorAll('.rond')[2]
let buttons3 = carousel.querySelectorAll('.rond')[3]
let divCarousel = document.querySelector('.carousel')
let carouselPartie = divCarousel.querySelectorAll('.carouselpartie')[0]
let carouselPartie1 = divCarousel.querySelectorAll('.carouselpartie')[1]
let carouselPartie2 = divCarousel.querySelectorAll('.carouselpartie')[2]
let carouselPartie3 = divCarousel.querySelectorAll('.carouselpartie')[3]
let carouselPartie4 = divCarousel.querySelectorAll('.carouselpartie')[4]
let carouselPartie5 = divCarousel.querySelectorAll('.carouselpartie')[5]
let carouselPartie6 = divCarousel.querySelectorAll('.carouselpartie')[6]
let carouselPartie7 = divCarousel.querySelectorAll('.carouselpartie')[7]
let tmp = document.querySelector('.tmp')

carouselPartie4.style.display = "none"
carouselPartie5.style.display = "none"
carouselPartie6.style.display = "none"
carouselPartie7.style.display = "none"



buttons.addEventListener('click', () => {
    carouselPartie.style.display = "none"
    carouselPartie4.style.display = "block"
})
buttons1.addEventListener('click', () => {
    carouselPartie1.style.display = "none"
    carouselPartie5.style.display = "block"
})
buttons2.addEventListener('click', () => {
    carouselPartie2.style.display = "none"
    carouselPartie6.style.display = "block"
})
buttons3.addEventListener('click', () =>{
    carouselPartie3.style.display = "none"
    carouselPartie7.style.display = "block"
})

