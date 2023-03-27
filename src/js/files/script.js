// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import "./modernizr.js"

let player = document.querySelector('.video');
let playBtn = document.querySelector('.video__btn');
let playBtnWrap = document.querySelector('.video__btn-wrp');


playBtn?.addEventListener('click', function() {
    player.play();
});

player?.addEventListener('play', function() {
    playBtnWrap.style.display = 'none';
    document.querySelector('.about__img').style.display = 'none';
    player.setAttribute("controls", "controls");
})

player?.addEventListener('pause', function() {
    playBtnWrap.style.display = 'flex';
    document.querySelector('.about__img').style.display = 'inline-block'
})

let languageSwitcher = document.querySelector('#languageSwitcher');
let open = false;

function isOpen(){
    if(open)
       return document.querySelector('.header__switcher_wrap')?.classList.toggle('_open');
    else
       return document.querySelector('.header__switcher_wrap')?.classList.toggle('_open');
}

languageSwitcher?.addEventListener('click', function() {
    open = !open;
    isOpen();
})

languageSwitcher?.addEventListener('blur', function() {
    open = !open;
    isOpen();
})


const elem = document.querySelector('.b-marquee-line__flow-block');
const clone = elem?.cloneNode(true);
elem?.parentElement?.appendChild(clone);
// elem.classList?.toggle('animate-ticker');
clone?.classList?.toggle('clone');

const moreTextBtn = document.querySelector('.why-us__btn');

moreTextBtn?.addEventListener('click', function() {
    document.querySelector('.why-us__text')?.classList.toggle('_show-text');
});

//text-animation====================================================================================================

//Home page
ScrollReveal().reveal('.about__desc', { delay: 800, duration: 500,  distance: '60px', origin: 'bottom'});
ScrollReveal().reveal('.why-us__text-block', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.philosophy__text-block', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.program__container', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.advantages__block', { delay: 500, distance: '100%', duration: 500, origin: 'right' });
ScrollReveal().reveal('.contacts__container', { delay: 500, distance: '100%', duration: 500, origin: 'left' });

//About page
// 
ScrollReveal().reveal('.why-us__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.why-us__block', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.our-history__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.our-history__title', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
//====================================================================================================

// init controller
var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({triggerElement: "#about", offset: 10})
// 						.setPin("#spot")
//                         .setClassToggle("#spot", "green")
// 						.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
// 						.addTo(controller);


// new ScrollMagic.Scene({triggerElement: "#about video", triggerHook: 0.5})
//     .setPin("#spot")
//     .setClassToggle("#spot", "right")
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#why-us img"})
//     .setPin("#spot")
//     .setClassToggle("#spot", "left")
//     .on("enter leave", ()=>{document.querySelector("#spot").classList.remove('right')})
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 600})
//     .setPin("#spot")
//     .setClassToggle("#spot", "green")
//     .on("enter leave", updateBox)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);