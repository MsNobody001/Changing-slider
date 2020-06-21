const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst',
}, {
    img: 'images/img2.jpg',
    text: 'Drugi tekst',
}, {
    img: 'images/img3.jpg',
    text: 'Trzeci tekst',
}];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

//Parametry
const time = 2000;
let active = 0;

//Implementacja
const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
}

setInterval(changeSlide, time);