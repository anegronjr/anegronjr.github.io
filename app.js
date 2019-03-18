const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav");

burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
});

const heroName = document.querySelector(".hero-name");
const heroBlurb = document.querySelector(".hero-blurb");

heroName.style.opacity = "1";
heroName.style.transform = "translateX(0px)";
heroBlurb.style.opacity = "1";
heroBlurb.style.transform = "translateY(0px)";

const projContainers = document.querySelectorAll(".project-container");
const projTracks = document.querySelectorAll(".project-track");

for (let i = 0; i < projContainers.length; i++){
    projContainers[i].addEventListener("click", function(){
        if (projTracks[i].style.transform == "translateX(-100%)"){
        projTracks[i].style.transform = "translateX(0)";
        } else {
            projTracks[i].style.transform = "translateX(-100%)";
        }
    });
}

//Fade in on scroll
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const aboutSection = document.querySelector(".about");
const fadeElems = document.querySelectorAll(".fade");

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let checkSlide = function(e) {
    if(isInViewport(aboutSection)){
        fadeElems.forEach(function(elem){
            elem.classList.add('fadein');
        });
    } else {
        fadeElems.forEach(function(elem){
            elem.classList.remove('fadein');
        });
    }
};

window.addEventListener("scroll", debounce(checkSlide, 25));
