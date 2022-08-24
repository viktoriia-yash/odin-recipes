const slideshowContainer = document.querySelector(".slideshow-container");
const btnLeft = document.querySelector(".slideshow_btn-left");
const btnRight = document.querySelector(".slideshow_btn-right");

const slideshowImages = [
  {
    src: "img/img-one.jpg",
  },
  {
    src: "img/img-two.jpg",
  },
  {
    src: "img/img-three.jpg",
  },
];

let slideshowCounter = 0;

const startSlideshow = () => {
  slideshowContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${slideshowImages[0].src})`;
};

btnRight.addEventListener("click", function () {
  if (slideshowCounter === slideshowImages.length - 1) {
    slideshowContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${slideshowImages[0].src})`;
    slideshowCounter = -1;

    slideshowContainer.classList.add("fadeIn");
    setTimeout(() => {
      slideshowContainer.classList.remove("fadeIn");
    }, 1000);
  }
  slideshowContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${slideshowImages[slideshowCounter + 1].src})`;
  slideshowCounter++;
  slideshowContainer.classList.add("fadeIn");
  setTimeout(() => {
    slideshowContainer.classList.remove("fadeIn");
  }, 1000);
});

btnLeft.addEventListener("click", function () {
  if (slideshowCounter === 0) {
    slideshowContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${slideshowImages[slideshowImages.length - 1].src})`;
    slideshowCounter = slideshowImages.length;
    slideshowContainer.classList.add("fadeIn");
    setTimeout(() => {
      slideshowContainer.classList.remove("fadeIn");
    }, 1000);
  }

  slideshowContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${slideshowImages[slideshowCounter - 1].src})`;
  slideshowCounter--;
  slideshowContainer.classList.add("fadeIn");
  setTimeout(() => {
    slideshowContainer.classList.remove("fadeIn");
  }, 1000);
});

startSlideshow();
