/*        DARK MODE*/

const themeButton = document.getElementById("theme-toggle");
// Check saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");

    themeButton.querySelector("i").classList.remove("fa-moon");
    themeButton.querySelector("i").classList.add("fa-sun");

}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = themeButton.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","dark");

    }
    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","light");

    }

});
/*          LOADER*/

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("loader-hide");
    }, 1500);
});
/*==============================
      MOBILE NAVIGATION
==============================*/

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuButton.querySelector("i");

    if(navLinks.classList.contains("show")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
/*==============================
      BACK TO TOP BUTTON
==============================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }
    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==============================
      SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

// Run once when page loads
revealOnScroll();