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


var zoomableImages = document.querySelectorAll('.license__image');

if(zoomableImages.length) {
    for (var i = 0; i < zoomableImages.length; i++) {
        zoomableImages[i].addEventListener('click', function() {
          this.classList.toggle('zoomed');
        });
      }
}




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


//ScrollMagic====================================================================================================
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// tl.fromTo("section.panel.turqoise", 1, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, "+=1");
// tl.fromTo("section.panel.tomato", 1,   { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, "+=1");
// tl.fromTo("section.panel.pink", 1,     { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, "+=1");
// tl.fromTo("section.panel.yellow", 1,   { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, "+=1");


tl.fromTo(".slide", 2,   { xPercent: 10 }, { xPercent: -60, ease: Linear.easeNone });

new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#pinMaster")
    .setTween(tl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    })
    .addTo(controller);




const procentX = () => {
    console.log('animate')
    const windowInnerWidth = document.documentElement.clientWidth;

    if(windowInnerWidth <= 1040) {
        return -200;
    }

    return -100;
};


let structureSlider = new TimelineMax();
// var tween = new TweenMax();

structureSlider.fromTo("#structure-slider", 10, { xPercent: 40 }, { xPercent: -100, ease: Linear.easeNone });

window.onresize = function () {
    console.log('resize');
    const windowInnerWidth = document.documentElement.clientWidth;

    if(windowInnerWidth <= 1040) {
        structureSlider.from({ xPercent: -200 })
    }
}


new ScrollMagic.Scene({
    triggerElement: "#structure",
    triggerHook: "onLeave",
    duration: "100%"
})
.setPin('#structure')
.setTween(structureSlider)
.addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
}).addTo(controller);