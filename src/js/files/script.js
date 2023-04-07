// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import "./modernizr.js"

//====================================================================================================
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

//====================================================================================================


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
//====================================================================================================

const elem = document.querySelector('.b-marquee-line__flow-block');
const clone = elem?.cloneNode(true);
elem?.parentElement?.appendChild(clone);
clone?.classList?.toggle('clone');

if(document.querySelector('.wrapp')) {

    const root = document.documentElement

    const marqueeContent = document.querySelector('ul.marquee-content')

    root.style.setProperty('--marquee-elements', marqueeContent.children.length)

    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')

    for (let index = 0; index < marqueeElementsDisplayed.length; index++) {
        marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
    }
}


//====================================================================================================
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
if(document.documentElement.clientWidth >= 479) {
    ScrollReveal().reveal('.contacts__container', { delay: 500, distance: '100%', duration: 500, origin: 'left' });
}

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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// const windowInnerWidth = document.documentElement.clientWidth
gsap.registerPlugin(ScrollTrigger);

// if (ScrollTrigger.isTouch  === 1) {
//    ScrollTrigger.normalizeScroll(true);
// }

let scene1 = gsap.timeline();
let sections = gsap.utils.toArray(".property");
let endPoint = 
document.querySelector(".structure__slider")?.offsetWidth > 
document.querySelector(".structure__slider")?.offsetHeight ? 
document.querySelector(".structure__slider")?.offsetWidth : 
document.querySelector(".structure__slider")?.offsetHeight;
endPoint += 100;

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
        // markers: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        pin: true,
        ease: "none",
    });

    window.addEventListener('resize', getSceneAnimation, true);
}

if(document.querySelector('.formula-success')) {

    let formulaSuccessScene = gsap.timeline();
    let steps = gsap.utils.toArray(".step");

    const formulaTriger =  ScrollTrigger.create({
        animation: formulaSuccessScene,
        trigger: ".formula-success",
        start: "top top",
        end: "+=" + 600,
        id: "formula-id",
        // markers: true,
        scrub: 1,
        snap: 1 / (steps.length - 1),
        pin: true,
        ease: "none",
    });

    // formulaTriger.normalizeScroll(true);

    // w <= 1154px staart animation
    function updateAnimation() {
        const windowInnerWidth = document.documentElement?.clientWidth;

        if(windowInnerWidth > 1154) {
            formulaTriger.disable();
            document.querySelector('.pin-spacer-formula-id').style.maxHeight = "600px"
        } else {
            formulaTriger.enable();
            document.querySelector('.pin-spacer-formula-id').style.maxHeight = "none"
        }


        if(windowInnerWidth <= 1154 && windowInnerWidth > 867 ) {
            formulaSuccessScene.clear();
            formulaSuccessScene.to("#steps-block", 5, {xPercent: -40});
        }
        if(windowInnerWidth <= 867 &&  windowInnerWidth > 594 ) {
            formulaSuccessScene.clear();
            formulaSuccessScene.to("#steps-block", 5, {xPercent: -120});
        }
        if(windowInnerWidth <= 594 &&  windowInnerWidth > 414 ) {
            formulaSuccessScene.clear();
            formulaSuccessScene.to("#steps-block", 15, {xPercent: -195});
        }
        if(windowInnerWidth <= 414 &&  windowInnerWidth > 320) {
            formulaSuccessScene.clear();
            formulaSuccessScene.to("#steps-block", 15, {xPercent: -260});
        }
        if(windowInnerWidth <= 320) {
            formulaSuccessScene.clear();
            formulaSuccessScene.to("#steps-block", 15, {xPercent: -300});
        }

    }

    updateAnimation();

    window.addEventListener('resize', updateAnimation, true);

}

if(document.querySelector('.team')) {
    let teamScene = gsap.timeline();
    let end = document.querySelector('.team__workers').scrollHeight - document.querySelector('.worker').offsetHeight;

    ScrollTrigger.create({
        animation: teamScene,
        trigger: ".team",
        start: "top top",
        end: "+=" + end,
        fastScrollEnd: true,
        // markers: true,
        scrub: 1,
        pin: true,
        ease: "none",
        onLeave: () => {
            // document.querySelector('.photo-gallery').scrollIntoView({block: "center", inline: "center"});
         }
    });

    if(document.documentElement.clientWidth < 479) {
        end += 80;
    }

    teamScene.to(".team__workers", 5,  { y: -1 * (end) });
}

// photo-gallery
if(document.querySelector('.photo-gallery')) {
    let galleryScene = gsap.timeline();
    let item = gsap.utils.toArray(".gallery__item");

   const galleryTriger =  new ScrollTrigger.create({
        animation: galleryScene,
        trigger: ".photo-gallery",
        start: "top top",
        end: "+=" + 600,
        // markers: true,
        scrub: 1,
        snap: 1 / (item.length - 1),
        // pin: true,
        ease: "none",
        onLeave: () => { 
            const windowInnerWidth = document.documentElement.clientWidth;

            if (windowInnerWidth < 479) {
                galleryScene.clear();
                galleryTriger.disable();

                let gallery = document.querySelector('.gallery');
    
                gallery.style.overflowX = "scroll"
                gallery.style.transform = `translate(0, 0)`;
                gallery.scrollLeft = gallery.scrollWidth;

                document.querySelector('.photo-gallery').scrollIntoView({block: "center", inline: "center"});
                
            }
        }
    });


    function getMoveDistance(){
        let move = document.querySelector('.gallery').scrollWidth;
        let block = document.querySelector('.gallery').offsetWidth ;

        move = (move - block)  * -1;
        galleryScene.clear();
        galleryScene.to(".gallery", 25, {x: move})
    }

    getMoveDistance();

    window.addEventListener('resize', getMoveDistance, true);
}

//animation header
if(document.querySelector('._animate-header')) {
    let tween = gsap.to(".header", {backgroundColor:' #0B0245', duration: 1, ease: "elastic"});

    ScrollTrigger.create({
        animation: tween,
        trigger: "._animate-header",
        start: "top top",
        end:"max",
        // markers: true,
        scrub: 1,
    })
}

if(document.querySelector('.spot')) {
    let aboutScene = gsap.timeline();

    aboutScene.to(".spot", 5, {y: 351, x: 300,
        ease: "none",
        scrollTrigger: {
            trigger:".about",
            start: "top center",
            end: "bottom 50%",
            invalidateOnRefresh: true,
            scrub: 0,
            markers: true,
            onLeave: () => {aboutScene.to(".spot", 2, {y: 651, x: 980})} 
          }
    });
}


// console.log(document.querySelector('.about__text'));
// console.log(document.querySelector('.why-us__text'));

// ScrollTrigger.create({
//     trigger:".spot",
//     start: "top center",
//     end: "+=500",
// });