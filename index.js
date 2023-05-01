import { trapFocus } from "./utils.js";

const navToggler = document.querySelector("#navToggleBtn");
const nav = document.querySelector("#nav");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav__link");

const openMenu = () => {
    nav.classList.add("menu--open");
    navMenu.classList.add("nav__menu--visible");
    navToggler.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    trapFocus(nav);
};

const closeMenu = () => {
    nav.classList.remove("menu--open");
    navMenu.classList.remove("nav__menu--visible");
    navToggler.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
};

navToggler.addEventListener("click", () => {
    const isExpanded = navToggler.getAttribute('aria-expanded') === 'true';
    
    if(isExpanded) {
        closeMenu();
    } else {
        openMenu()
    }
});

for (let link of navLinks) {
    link.addEventListener("click", closeMenu);
}




