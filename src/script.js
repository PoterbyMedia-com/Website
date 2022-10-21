var header;
header = document.querySelector('header');
var navitem;
navitem = document.querySelectorAll("nav > ul > li a");
var count = 0;
var image_url = [
    // 'back.jpg',
    'back2.jpg',
    //'back3.jpg',
    'back4.jpg',
    // 'back5.jpg',
    'back6.jpg',
    // 'back7.jpg',
];
function checkbgcolor(count) {
    console.log("bg", count);
    if (count === 0) {
        navitem.forEach(function (a) { return a.style.color = "rgb(116,79,99)"; });
    }
    else {
        navitem.forEach(function (a) { return a.style.color = "black"; });
    }
}
//function to display menu bar on mobile
var menuitems = document.querySelector("header > .mobile_header");
var menu = document.querySelector("header > .menu_bar");
menu === null || menu === void 0 ? void 0 : menu.addEventListener("click", displayMenu);
function displayMenu() {
    menuitems === null || menuitems === void 0 ? void 0 : menuitems.classList.add("display_menu");
}
//function to remove menu bar on mobile
var cancel_menu = document.querySelector("header .cancel_menu");
cancel_menu === null || cancel_menu === void 0 ? void 0 : cancel_menu.addEventListener("click", removeMenu);
function removeMenu() {
    menuitems === null || menuitems === void 0 ? void 0 : menuitems.classList.remove("display_menu");
}
var prevDom = document.querySelector('.move > .prev');
var next = function () {
    if (window.innerWidth >= 350) {
        if (count < image_url.length - 1) {
            ++count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            checkbgcolor(count);
        }
        else {
            count = 0;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            checkbgcolor(count);
        }
    }
    else {
        header.style.backgroundImage = "";
    }
};
var nextDom = document.querySelector('.move > .next');
var prev = function () {
    if (window.innerWidth >= 350) {
        if (count > 0) {
            --count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            checkbgcolor(count);
        }
        else {
            count = image_url.length - 1;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            checkbgcolor(count);
        }
    }
    else {
        header.style.backgroundImage = "";
    }
};
var inter = setInterval(next, 40000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom === null || prevDom === void 0 ? void 0 : prevDom.addEventListener('click', prev);
nextDom === null || nextDom === void 0 ? void 0 : nextDom.addEventListener('click', next);
//screen size
