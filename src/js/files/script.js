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

// const elem = document.querySelector('.b-marquee-line__flow-block');
// const clone = elem?.cloneNode(true);
// elem?.parentElement?.appendChild(clone);
// clone?.classList?.toggle('clone');

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
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// const windowInnerWidth = document.documentElement.clientWidth
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//Scroll To====================================================================================================

document.querySelector('#btnScrollToAbout')?.addEventListener('click', function() {
    gsap.to(window, {duration: 2, scrollTo: "#about"});
});


document.querySelector('#btnScrollToStructure')?.addEventListener('click', function() {
    gsap.to(window, {duration: 2, scrollTo: "#structure"});
});

document.querySelector('.header__logo')?.addEventListener('click', function(e) {
    if(e) e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo: "#main"});
})

//End scroll To====================================================================================================

// if (ScrollTrigger.isTouch  === 1) {
//    ScrollTrigger.normalizeScroll(true);
// }

ScrollTrigger.config({ignoreMobileResize: true});

if(document.querySelector('.structure')) {

    let mm = gsap.matchMedia(),
    breakPoint = 560;

    mm.add({

        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      
      }, (context) => {
      
        let { isDesktop, isMobile } = context.conditions;
      
        let slide = gsap.utils.toArray(".property"),
        sliderScene = gsap.fromTo(".structure__slider", 
        {x: isDesktop ? 600 : 0, y: isDesktop ? 0 : 50 }, 
        {x: isDesktop ? (i, target) => target.offsetWidth - target.scrollWidth : 0, 
            y: isDesktop ? 0 : (i, target) => (target.offsetHeight - 250) * - 1,
            ease: "none",
            scrollTrigger: {
                trigger: "#structure",
                start: "top top",
                end: "+=" + 600,
                // markers: true,
                scrub: 1,
                snap: 1 / (slide.length - 1),
                pin: true,
                invalidateOnRefresh: true
            }
        });
    
      });
}

if(document.querySelector('.formula-success')) {

    let mm = gsap.matchMedia();

    mm.add("(max-width: 1154px)", () => {

        let item = gsap.utils.toArray(".step"),
        formulaSuccessScene = gsap.to("#steps-block", {
            x: (i, target) => target.offsetWidth - target.scrollWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".formula-success",
                start: "top top",
                end: "+=" + 600,
                // markers: true,
                scrub: 1,
                snap: 1 / (item.length - 1),
                pin: true,
                invalidateOnRefresh: true
            }
        });
    });
}

if(document.querySelector('.team')) {
    let item = gsap.utils.toArray(".worker"),
     teamScene = gsap.to(".team__workers", {
		y: (i, target) => (target.scrollHeight - target.firstElementChild.offsetHeight) * -1,
		ease: "none",
		scrollTrigger: {
			trigger: ".team",
			start: "top top",
			end: "+=" + 600,
			// markers: true,
			scrub: 1,
			snap: 1 / (item.length - 1),
			pin: true,
			invalidateOnRefresh: true
		}
    });
}

// photo-gallery
if(document.querySelector('.photo-gallery')) {
    let mm = gsap.matchMedia(),
    breakPoint = 480;


    mm.add({
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)"
      }, (context) => {
      
        let {isDesktop} = context.conditions;

        let item = gsap.utils.toArray(".gallery__item"),
        galleryScene = gsap.to(".gallery", {
            x: isDesktop ? (i, target) => target.offsetWidth - target.scrollWidth : 0,
            y: isMobile ? (i, target) => (target.scrollHeight - target.firstElementChild.offsetHeight) * -1 : 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".photo-gallery",
                start: "top top",
                end: "+=" + 600,
                // markers: true,
                scrub: 1,
                snap: 1 / (item.length - 1),
                pin: true,
                invalidateOnRefresh: true
            }
        });
    
      });

      
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

//Spot animation====================================================================================================
gsap.registerPlugin(MotionPathPlugin)

if(document.querySelector('.spot')) {

    const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1
    const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1

    const path = [
        //1
        {x: 740, y: 400},
        //2
        {x: 165, y: 1200},
        //3
        {x: 500, y: 2200},
    ];


    const scaledPath = path.map(({ x, y }) => {
        return {
            x: x * rx,
            y: y * ry
        }
    })

    const aboutSpotScene = gsap.timeline({
        scrollTrigger: {
            trigger:".about",
            start: "top 80%",
            // end: "+=" + 2200,
            scrub: 1.5,
            // markers: true,
            endTrigger: ".our-history",
        },
    })

    aboutSpotScene.to(".spot", {
        motionPath: {
            path: scaledPath,
            align: 'self',
            alignOrigin: [0.5, 0.5],
            // autoRotate: true
        },
        duration: 2,
        immediateRender: true,
        // ease: 'power4'
    })
    // aboutSpotScene.to(".spot", {x: 740, y: 400});

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY
        };
      }

    // console.log(getOffset(document.querySelector('.about__content')));
    // console.log(getOffset(document.querySelector('.why-us__gif')));
    // console.log(getOffset(document.querySelector('.our-history__body')));
    console.log(getOffset(document.querySelector('.spot')));
    
}


