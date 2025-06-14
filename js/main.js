import Header from "./Header.js";
import Footer from "./Footer.js";
import CheckList from "./CheckList.js";
import Slider from "./Slider.js";

new Header();
new Footer();
new CheckList();
new Slider();

document.querySelectorAll(".input").forEach((input) => {
  const span = input.nextElementSibling;
  function togglePlaceholder() {
    if (input.value) {
      span.style.display = "none";
    } else {
      span.style.display = "";
    }
  }
  input.addEventListener("input", togglePlaceholder);
  input.addEventListener("focus", togglePlaceholder);
  input.addEventListener("blur", togglePlaceholder);
  togglePlaceholder();
});
