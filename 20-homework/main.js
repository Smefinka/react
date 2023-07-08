let buttons = document.getElementsByTagName('button');
let countSlides = 0;
buttons = [...buttons];
buttons.forEach(element => {
  element.addEventListener('click', showImg);
});

function showImg(e){
const image = document.getElementById('slideImg');
const imageArray = ['images/img-1.png', 'images/img-2.png', 'images/img-3.png', 'images/img-4.png'];
e.target.id === 'next' ? showNextImg(e,image,imageArray) : showPrevImg(e,image,imageArray);
}

function showNextImg(e,image,imageArray) {
  document.getElementById('prev').style.removeProperty('display');
 console.log(countSlides);
  countSlides++;
  image.setAttribute('src', imageArray[countSlides]);
  if (countSlides === imageArray.length - 1) e.target.style.display = "none";
}

function showPrevImg(e,image,imageArray) {
  document.getElementById('next').style.removeProperty('display');
  countSlides--;
  image.setAttribute('src', imageArray[countSlides]);
  if (countSlides === 0) e.target.style.display = "none";
}


// Second version 

/*const buttonNext = document.getElementById('next');
const buttonPrev = document.getElementById('prev');
const image = document.getElementById('slideImg');
const imageArray = ['images/img-1.png', 'images/img-2.png', 'images/img-3.png', 'images/img-4.png'];
let countSlides = 0;
buttonNext.addEventListener('click', showNextImg);
buttonPrev.addEventListener('click', showPrevImg);

function showNextImg(e) {
  buttonPrev.style.removeProperty('display');
  countSlides++;
  image.setAttribute('src', imageArray[countSlides]);
  if (countSlides === imageArray.length - 1) {
    e.target.style.display = "none";
  }
}

function showPrevImg(e) {
  buttonNext.style.removeProperty('display');
  countSlides--;
  image.setAttribute('src', imageArray[countSlides]);
  if (countSlides === 0) {
    e.target.style.display = "none";
  }
}*/