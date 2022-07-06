/* ========================================
menue toggle Coding Start
======================================== */
const nav = document.querySelector(".nav")
const navlist = document.querySelectorAll("li")
const navlistLength = navlist.length;
const allSections = document.querySelectorAll(".section") 
const allSectionsLength = allSections.length;

for (let i = 0; i < allSectionsLength; i++) {   
    const a = navlist[i].querySelector("a");
    a.addEventListener("click",function() {
        
    for (let i = 0; i < allSectionsLength; i++) {
        allSections[i].classList.remove("back-section");        
    }
        for (let j = 0; j < navlist.length; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) { 
                allSections[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            SlideToggler();
        }
    })
}


function rmove() {     
    for (let i = 0; i < allSectionsLength; i++) {
        allSections[i].classList.remove("back-section");        
    }
}
function add(num) {
    if (navlist[num].querySelector("a").classList.contains("active")) { 
        allSections[num].classList.add("back-section");
    }
}
function removebacksection() {
    for (let i = 0; i < allSectionsLength; i++) {
        allSections[i].classList.remove("back-section");
    }
}    
function addbacksection() {
    allSections[j].classList.add("back-section");
}    
function showSection(ele) {
    for (let i = 0; i < allSectionsLength; i++) {
        allSections[i].classList.remove("active");        
    }
    const targete = ele.getAttribute("href").split("#")[1];
    document.querySelector("#" + targete).classList.add("active");
}
function ubdatenav(ele) {
    for (let i = 0; i < navlistLength; i++) {
        navlist[i].querySelector("a").classList.remove("active");
    }
    const targete = ele.getAttribute("href").split("#")[1];
    document.querySelector("#" + targete).classList.add("active");
}
document.querySelector(".hire-me").addEventListener("click",function(e) {
    const sectionindex = this.getAttribute("data-section-index");
    
    showSection(this);
    ubdatenav(this);
    rmove();
    add();
})
const toggler = document.querySelector(".toggler"),
sidebar = document.querySelector(".sidebar");
    toggler.addEventListener("click", () => {
        SlideToggler();
    })
    function SlideToggler() {
        sidebar.classList.toggle("open");
        toggler.classList.toggle("open");
        for (let i = 0; i < allSectionsLength; i++) {
            allSections[i].classList.toggle("open");
        }
    }
/* ========================================
menue toggle Coding End
======================================== */


/* ========================================
Switcher Coding Start
======================================== */
const switcher = document.querySelector(".style-switcher-toggler");
switcher.addEventListener("click", () => {
    document.querySelector(".switcher").classList.toggle("open")
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".switcher").classList.contains("open")) {
        document.querySelector(".switcher").classList.remove("open");
    }   
})

const AlternateStyle = document.querySelectorAll(".alternate-style");
function SetActiveStyle(color) {
    AlternateStyle.forEach((style) => { 
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled","true")
        }
    })    
}

const night = document.querySelector(".day-night");
    night.addEventListener("click", () => {
        night.querySelector("i").classList.toggle("fa-sun")
        night.querySelector("i").classList.toggle("fa-moon")
        document.body.classList.toggle("dark")
    })
    window.addEventListener("load", () => { 
        if (document.body.classList.contains("dark")) {
            night.querySelector("i").classList.add("fa-sun")
        } else {
            night.querySelector("i").classList.add("fa-moon")
        }
     });
/* ========================================
Switcher Coding End
======================================== */


/* ========================================
Auto Writing Coding Start
======================================== */
var typed = new Typed(".typing",{
    strings: ["Front End Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ========================================
Auto Writing Coding End
======================================== */