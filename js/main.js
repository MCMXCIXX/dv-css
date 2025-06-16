import Header from "./Header.js";
import Footer from "./Footer.js";
import CheckList from "./CheckList.js";
import Slider from "./Slider.js";
import PersonModal from "./PersonModal.js";

new Header();
new Footer();
new CheckList();
new Slider();
new PersonModal();

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

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("cookie-accept");
  if (!localStorage.getItem("cookieAccepted")) {
    banner.style.display = "flex";
  }
  btn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
  });
});
