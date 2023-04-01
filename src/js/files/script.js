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
ScrollReveal().reveal('.why-us__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.why-us__block', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.our-history__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.our-history__title', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});

//Tools page
ScrollReveal().reveal('.main-tools__header', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.main-tools__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.agri-banck__title', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
ScrollReveal().reveal('.agri-banck__text', { delay: 500, duration: 500,  distance: '80px', origin: 'bottom'});
//====================================================================================================


//GSAP====================================================================================================
// const windowInnerWidth = document.documentElement.clientWidth
gsap.registerPlugin(ScrollTrigger);


let scene1 = gsap.timeline();
let sections = gsap.utils.toArray(".property");
let endPoint = 
document.querySelector(".structure__slider")?.offsetWidth > 
document.querySelector(".structure__slider")?.offsetHeight ? 
document.querySelector(".structure__slider")?.offsetWidth : 
document.querySelector(".structure__slider")?.offsetHeight;
endPoint += 100;
console.log(endPoint);

if(document.querySelector('.structure')) {

    function getSceneAnimation() {
        const windowInnerWidth = document.documentElement?.clientWidth;
    
        if(windowInnerWidth > 1030) {
            scene1.clear();
            scene1.fromTo("#structure-slider", 45, { xPercent: 40 }, { xPercent: -100 });
            endPoint = document.querySelector(".structure__container")?.offsetWidth;
        }
        if(windowInnerWidth <= 1030 && windowInnerWidth > 802){
            scene1.clear();
            scene1.fromTo("#structure-slider", 45, { xPercent: 40 }, { xPercent: -160 });
            endPoint = document.querySelector(".structure__container")?.offsetWidth;
        }
        if(windowInnerWidth <= 802 && windowInnerWidth > 560 ){
            scene1.clear();
            scene1.fromTo("#structure-slider", 45, { xPercent: 40 }, { xPercent: -300 });
            endPoint = document.querySelector(".structure__container")?.offsetWidth;
        }
        if(windowInnerWidth <= 560) {
            scene1.clear();
            scene1.fromTo("#structure-slider", 65, { yPercent: 10, xPercent: 0 }, { yPercent: -110, xPercent: 0 });
            endPoint = document.querySelector("#structure-slider")?.offsetHeight;
        }
    }
    
    getSceneAnimation();
    
    ScrollTrigger.create({
        animation: scene1,
        trigger: "#structure",
        start: "top top",
        end: "+=" + endPoint,
        markers: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        pin: true,
        ease: "none",
    });

    window.onresize = () => {
        getSceneAnimation();
    }
}



