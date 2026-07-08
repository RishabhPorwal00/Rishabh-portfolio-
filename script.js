// ===========================
// Mobile Menu
// ===========================

const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===========================
// Close Menu After Click
// ===========================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===========================
// Header Shadow
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    }else{
        header.style.boxShadow = "none";
    }

});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ===========================
// Scroll Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".project-card,.skill-card,.education-card,.contact-card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});
