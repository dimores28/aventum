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
elem.parentElement?.appendChild(clone);
// elem.classList?.toggle('animate-ticker');
clone.classList?.toggle('clone');

const moreTextBtn = document.querySelector('.why-us__btn');

moreTextBtn?.addEventListener('click', function() {
    document.querySelector('.why-us__text')?.classList.toggle('_show-text');
});
