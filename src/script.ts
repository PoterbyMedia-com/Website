let header: any;
header = document.querySelector('header');

let count: number = 0;
const image_url: string[] = [
  'back.jpg',
  'back2.jpg',
  'back3.jpg',
  'back4.jpg',
  'back5.jpg',
  'back6.jpg',
  'back7.jpg',
];

const prevDom = document.querySelector('.move > .prev');
const next = (): void => {
  if (window.innerWidth >= 350) {
    if (count < image_url.length - 1) {
      header.style.backgroundImage = `url(img/${image_url[++count]})`;
    } else {
      count = 0;
      header.style.backgroundImage = `url(img/${image_url[count]})`;
    }
    console.log(count);
    console.log(window.innerWidth);
  } else{
    header.style.backgroundImage = ""
  }
};

const nextDom = document.querySelector('.move > .next');
const prev = (): void => {
    if (window.innerWidth >= 350){
        if (count > 0) {
            header.style.backgroundImage = `url(img/${image_url[--count]})`;
            console.log(count);
          } else {
            count = image_url.length - 1;
            header.style.backgroundImage = `url(img/${image_url[count]})`;
          }
          console.log(count);
          console.log(window.innerWidth);
    }
    else{
      header.style.backgroundImage = ""
    }
};
let inter = setInterval(next, 5000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom?.addEventListener('click', prev);
nextDom?.addEventListener('click', next);

//screen size
