"use strict";

const slides = document.querySelectorAll(".slide");
// 0% 100% 200% 300% 400%
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let curSlide = 0;
const maxSlide = slides.length - 1;

const moveSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

moveSlide(0);

//Next Slide

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  moveSlide(curSlide);
};

const preSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  moveSlide(curSlide);
};

btnLeft.addEventListener("click", preSlide);
btnRight.addEventListener("click", nextSlide);
