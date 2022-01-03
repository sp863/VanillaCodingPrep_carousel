"use strict";

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length - 1;

//Functions
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot--active"));
  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};

const moveSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    // 0% 100% 200% 300% 400%
  );
};
//Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  moveSlide(curSlide);
  activateDot(curSlide);
};
//Previous Slide
const preSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  moveSlide(curSlide);
  activateDot(curSlide);
};

const slideInit = function () {
  moveSlide(0);
  createDots();
  activateDot(0);
};

slideInit();

// Event Listener
btnLeft.addEventListener("click", preSlide);
btnRight.addEventListener("click", nextSlide);
document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && preSlide();
  e.key === "ArrowRight" && nextSlide();
});
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const { slide } = e.target.dataset;
    moveSlide(slide);
    activateDot(slide);
  }
});
