const $ = (selector) => document.querySelector(selector);
const isMobile = (window.innerWidth < 1024);

$('#top-pattern').src = isMobile ?
    './assets/images/bg-pattern-top-mobile.svg' :
    './assets/images/bg-pattern-top-desktop.svg';

$('#bottom-pattern').src = isMobile ?
    './assets/images/bg-pattern-bottom-mobile.svg' :
    './assets/images/bg-pattern-bottom-desktop.svg';