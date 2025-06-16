export default class Slider {
  constructor() {
    this.sliders = document.querySelectorAll(".slider");
    this.initSliders();
  }

  initSliders() {
    this.sliders.forEach((slider, index) => {
      const tabs = document.querySelectorAll(".qa__tab");
      const sliderList = slider.querySelector(".slider__list");
      const slides = sliderList.children;
      if (!slides.length) return;

      const prevButton = slider.querySelector(".slider__button--prev");
      const nextButton = slider.querySelector(".slider__button--next");
      let position = 0;
      let slideWidth = slides[0].offsetWidth + 20;
      const totalSlides = slides.length;
      const visibleWidth = slider.offsetWidth;

      const updateSlideWidth = () => {
        slideWidth = slides[0].offsetWidth + 20;
      };

      const moveSlider = () => {
        sliderList.style.transform = `translateX(${position}px)`;
      };
      const handleNext = () => {
        const maxPosition = -(totalSlides - Math.floor(visibleWidth / slideWidth)) * slideWidth;

        if (position > maxPosition) {
          updateSlideWidth();

          position -= slideWidth;
          moveSlider();
        }
        if (position === maxPosition) {
          nextButton.style.opacity = "0.5";
          prevButton.style.opacity = "1";
        } else {
          nextButton.style.opacity = "1";
          prevButton.style.opacity = "0.5";
        }
        if (position != 0) {
          prevButton.style.opacity = "1";
        }
      };

      const handlePrev = () => {
        if (position < 0) {
          updateSlideWidth();
          position += slideWidth;
          moveSlider();
          console.log(position);
        }
        if (position != 0) {
          prevButton.style.opacity = "1";
          nextButton.style.opacity = "1";
        } else {
          prevButton.style.opacity = "0.5";
        }
      };

      if (nextButton) nextButton.addEventListener("click", handleNext);
      if (prevButton) prevButton.addEventListener("click", handlePrev);

      window.addEventListener("resize", () => {
        updateSlideWidth();
        position = Math.min(0, Math.max(position, -(totalSlides - Math.floor(visibleWidth / slideWidth)) * slideWidth));
        moveSlider();
      });
    });
  }
}
