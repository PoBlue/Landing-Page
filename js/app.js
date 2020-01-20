/**
 * Define Global Variables
 * 
*/
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

// check if an element in viewport 
// reference: https://stackoverflow.com/a/125106
function elementInViewport2(el) {
    let bounding = el.getBoundingClientRect();

    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// build the nav
sections.forEach((ele) => {
    const sectionName = ele.getAttribute("data-nav");
    const navEle = document.createElement("li");
    navEle.innerHTML = `<a href="#${ele.id}" id="nav_${ele.id}">${sectionName}</a>`;
    nav.appendChild(navEle);
}) ;

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function() {
    sections.forEach((section) => {
        const navEle = document.querySelector('#nav_' + section.id);
        if (elementInViewport2(section)) {
            navEle.classList.add("active");
        } else {
            navEle.classList.remove("active");
        }
    });
});
