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
var menu = document.querySelector("header > .menu_bar"); //menu bar
function checkbgcolor(count) {
    if (count === 0) {
        navitem.forEach(function (a) { return a.style.color = "rgb(116,79,99)"; });
        menu.style.background = "rgba(96,125,139,0.49)";
    }
    else {
        navitem.forEach(function (a) { return a.style.color = "black"; });
        menu.style.background = "none";
    }
}
//function to display menu bar on mobile
var menuitems = document.querySelector("header > .mobile_header");
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
var getdot = document.querySelectorAll(".dot_move > .dot");
var nextDom = document.querySelector('.move > .next');
var prevDom = document.querySelector('.move > .prev');
var next = function () {
    if (window.innerWidth >= 350) {
        getdot.forEach(function (element) {
            element.classList.remove("active");
        }); //making all the dot boxes unactive
        if (count < image_url.length - 1) {
            ++count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active"); //making the position of the below dot active when the image is displayed in that position
            checkbgcolor(count); //check the background color
        }
        else {
            count = 0;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
            checkbgcolor(count);
        }
    }
    else {
        header.style.backgroundImage = "";
    }
};
var prev = function () {
    if (window.innerWidth >= 350) {
        getdot.forEach(function (element) {
            element.classList.remove("active");
        }); //making all the dot boxes unactive
        if (count > 0) {
            --count;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
            checkbgcolor(count);
        }
        else {
            count = image_url.length - 1;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
            getdot[count].classList.add("active");
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
//Load on page scroll
window === null || window === void 0 ? void 0 : window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        console.dir(reveals[i]);
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint)
            reveals[i].classList.add('active');
        else
            reveals[i].classList.remove('active');
    }
}
