let header: any;
header = document.querySelector('header');
let navitem: any;
navitem = document.querySelectorAll("nav > ul > li a")


let count: number = 0;
const image_url: string[] = [
  // 'back.jpg',
   'back2.jpg',
  //'back3.jpg',
  'back4.jpg',
  // 'back5.jpg',
  'back6.jpg',
  // 'back7.jpg',
];

function checkbgcolor(count : number) : void{
  console.log("bg", count)
  if(count === 0){
   navitem.forEach(a => a.style.color = "rgb(116,79,99)")
  }else{
   navitem.forEach(a => a.style.color = "black")
  }
}

//function to display menu bar on mobile
const menuitems = document.querySelector("header > .mobile_header")
const menu = document.querySelector("header > .menu_bar")

menu?.addEventListener("click", displayMenu)
function displayMenu() {
  menuitems?.classList.add("display_menu")
}

//function to remove menu bar on mobile
const cancel_menu = document.querySelector("header .cancel_menu")
cancel_menu?.addEventListener("click", removeMenu)
function removeMenu(){
  menuitems?.classList.remove("display_menu")
}


const prevDom = document.querySelector('.move > .prev');
const next = (): void => {
  if (window.innerWidth >= 350) {
    if (count < image_url.length - 1) {
      ++count
      header.style.backgroundImage = `url(img/${image_url[count]})`;
      checkbgcolor(count);
    } else {
      count = 0;
      header.style.backgroundImage = `url(img/${image_url[count]})`;
      checkbgcolor(count);
    }
  } else{
    header.style.backgroundImage = ""
  }

};

const nextDom = document.querySelector('.move > .next');
const prev = (): void => {
    if (window.innerWidth >= 350){
        if (count > 0) {
            --count;
            header.style.backgroundImage = `url(img/${image_url[count]})`;
            checkbgcolor(count);
          } else {
            count = image_url.length - 1;
            header.style.backgroundImage = `url(img/${image_url[count]})`;
            checkbgcolor(count);
          }
    }
    else{
      header.style.backgroundImage = ""
    }
};
let inter = setInterval(next, 40000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom?.addEventListener('click', prev);
nextDom?.addEventListener('click', next);

//screen size
