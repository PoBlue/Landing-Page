/**
 * Define Global Variables
 * 
*/
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

// check if an element in viewport 
// reference: https://stackoverflow.com/a/125106
function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
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
