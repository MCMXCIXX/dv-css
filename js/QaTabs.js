import Slider from "./Slider.js";

const sliderInstance = new Slider();

const tabs = document.querySelectorAll(".qa__tab");
const qaSliders = document.querySelectorAll(".qa__slider");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    if (tab.id === "qa-tab-new") {
      switchTab("qa-new");
    }
    if (tab.id === "qa-tab-pop") {
      switchTab("qa-pop");
    }
    if (tab.id === "qa-tab-best") {
      switchTab("qa-best");
    }
    if (tab.id === "qa-tab-discus") {
      switchTab("qa-discus");
    }
  });
});

function switchTab(id) {
  qaSliders.forEach((qaSlider) => {
    qaSlider.classList.remove("active");
    if (qaSlider.id === id) {
      qaSlider.classList.add("active");
    }
  });
}
