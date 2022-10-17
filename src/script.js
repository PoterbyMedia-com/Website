var header;
header = document.querySelector('header');
var count = 0;
var image_url = [
    'back.jpg',
    'back2.jpg',
    'back3.jpg',
    'back4.jpg',
    'back5.jpg',
    'back6.jpg',
    'back7.jpg',
];
var prevDom = document.querySelector('.move > .prev');
var next = function () {
    if (window.innerWidth >= 350) {
        if (count < image_url.length - 1) {
            header.style.backgroundImage = "url(img/".concat(image_url[++count], ")");
        }
        else {
            count = 0;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
        }
        console.log(count);
        console.log(window.innerWidth);
    }
};
var nextDom = document.querySelector('.move > .next');
var prev = function () {
    if (window.innerWidth >= 350) {
        if (count > 0) {
            header.style.backgroundImage = "url(img/".concat(image_url[--count], ")");
            console.log(count);
        }
        else {
            count = image_url.length - 1;
            header.style.backgroundImage = "url(img/".concat(image_url[count], ")");
        }
        console.log(count);
        console.log(window.innerWidth);
    }
};
var inter = setInterval(next, 2000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom === null || prevDom === void 0 ? void 0 : prevDom.addEventListener('click', prev);
nextDom === null || nextDom === void 0 ? void 0 : nextDom.addEventListener('click', next);
//screen size
