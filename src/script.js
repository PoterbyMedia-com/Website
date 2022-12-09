const nav=document.querySelector(".nav")
const scrollHeight=window.pageYOffset
const navHeight=nav.getBoundingClientRect().height;

console.log(scrollHeight);
console.log(nav)
// const li = document.querySelectorAll('.bluey')
// window.addEventListener("scroll", function(){
//     const scrollHeight=window.pageYOffset
//     const navHeight=nav.getBoundingClientRect().height;
//     console.log(navHeight);
    
//     if(scrollHeight>navHeight){
//         nav.classList.add("fixed-nav")
//         nav.style.backgroundColor = 'white'
//         console.log("jerl")
//         li.forEach((li)=>{
//           li.style.color = 'white'
//         })
        
//     }
//     else{
//         nav.classList.remove("fixed-nav")
//         nav.style.backgroundColor = 'transparent'
//         li.forEach((li)=>{
//           li.style.color = 'rgb(209, 209, 9)'
//           console.log(li)
//         })
        
        
//     }
    
// })

const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelectorAll(".menu-icon div");
console.log(menuIcon);
const hide = document.querySelector('.hide')
menuIcon.addEventListener("click", () => {
    console.log("yes");
  for (i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("animate");
    lines[i].classList.remove("start")
    lines[i].classList.toggle("animation")
    hide.classList.toggle("hide-style")
  }
//   hide.style.visibility = 'visible'

});
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
    if (count === 0) {
        navitem.forEach(function (a) { return a.style.color = "rgb(116,79,99)"; });
       // menu.style.background = "rgba(96,125,139,0.49)";
    }
    else {
        navitem.forEach(function (a) { return a.style.color = "black"; });
       // menu.style.background = "none";
    }
}
//function to display menu bar on mobile
// var menu = document.querySelector(".nav .menu_bar"); //menu bar
// console.log(menu);
// var menu_img = document.querySelector(".nav .menu_bar > img"); //menu barimg
// console.log(menu_img);
// var menuitems = document.querySelector(".nav  .mobile_header");
// console.log(menuitems);
// menu === null || menu === void 0 ? void 0 : menu.addEventListener("click", displayMenu);
// let i = 0;
// function displayMenu() {
//     i++;
//     menuitems.classList.add("display_menu");
//     if(i%2 == 0){
//         menu_img.src = "https://img.icons8.com/material-outlined/24/000000/menu--v1.png" 
//         menuitems.classList.remove("display_menu");
//     }else{
//         menu_img.src = "https://img.icons8.com/color/48/000000/cancel--v1.png"
//         menuitems.classList.add("display_menu");
//     }
// }
//function to remove menu bar on mobile
var cancel_menu = document.querySelector(".nav .cancel_menu");
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
        header.style.backgroundImage = "none";
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
        header.style.backgroundImage = "none";
    }
};
var inter = setInterval(next, 9000);
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
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint)
            reveals[i].classList.add('active');
        else
            reveals[i].classList.remove('active');
    }
}


// let prod = document.getElementById("#recent_works")
// const productContainer = prod.querySelector(".rw");
// console.log(productContainer);
// console.log(prod)
// let productItemWidth;

// function click(){
//     productContainer.scrollBy({ left: productItemWidth, behavior: "smooth" });
// }
// click()
// // console.log(click());
// setInterval( ()=>{
//     click()
//     "jump"
// }, 3000)



// const servicesModule = JSON.parse(localStorage.getItem('products'));
let carouselCont =document.querySelector('.coverage .main3')
let carouselContainer =document.querySelector('.coverag .main3')

let all = [
    "img/recent.png",
    "img/pencil.png",
    "img/Rectangle 9.png",
    "img/Rectangle 8.png"
];
let over = [
    "img/google-cloud-partner 1.png",
    "img/google-premier-partner-2022 1.png",
    "img/meta-business-partners 1.png",
    "img/meta-certified-company-2 1.png",
    "img/microsoft-advertising-partner 1.png"
]

function render(refresh=false, animClass='slideInRight'){
    if(refresh)carouselCont.innerHTML="";
    all.map(item=>{
    return  carouselCont.innerHTML +=`<div class="main2_wrapper ${animClass}">
        <div class="image_wrapper"><img class="image" src="${item}" alt=""></div>
        
        </div>`
    }).join('');
    console.log(item.image)

}

function slider(refresh=false, animClass='slideInRight'){
    if(refresh)carouselContainer.innerHTML="";
    over.map(items=>{
    return  carouselContainer.innerHTML +=`<div class="main2_wrapper ${animClass}">
        <div class="image_wrapper"><img class="image" src="${items}" alt=""></div>
        
        </div>`
    }).join('');
    console.log(items.image)

}


let slideShows = setInterval(moveLefts,2000);

let slideShow = setInterval(moveLeft,2000);

function moveLeft(){
    let off = all.shift();
    all.push(off)
    render(true);
}
render();

function moveRight(){
    let off = all.pop();
    all.unshift(off)
    render(true,'slideInLeft');
}



function moveLefts(){
    let off = over.shift();
    over.push(off)
    slider(true);
}
slider();

function moveRights(){
    let off = over.pop();
    over.unshift(off)
    slider(true,'slideInLeft');
}
document.querySelector('.main2 .left').onmouseover = pauseSlideshow;
document.querySelector('.main2 .left').onmouseout = playSlideshow;

document.querySelector('.main2 .right').onmouseover = pauseSlideshow;
document.querySelector('.main2 .right').onmouseout = playSlideshow;

carouselCont.onmouseover = pauseSlideshow;
carouselCont.onmouseout = playSlideshow;
    
function pauseSlideshow(){
    return clearInterval(slideShow);
}

function playSlideshow(){
 return slideShow =  setInterval(moveLeft,2000);
}


// Get the button:
let mybutton = document.querySelector(".sticker");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

