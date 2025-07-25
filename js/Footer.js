export default class Footer {
  constructor() {
    const regionList = document.querySelectorAll(".region-select");
    const regionText = document.querySelector(".contacts__region-select-text");
    const address = document.querySelector(".contacts__adress a");
    const email = document.querySelector(".contacts__email a");
    const phone = document.querySelector(".contacts__number a");
    const headerPhone = document.querySelectorAll(".header__phone");
    const telegram = document.querySelectorAll(".header__telegram");
    const whatsUp = document.querySelectorAll(".header__whats-up");
    const mapFrame = document.getElementById("mapFrame");
    const mapTab = document.querySelectorAll(".contacts__map-tab");
    const modalSelectRegion = document.querySelector(".modal-select-region");
    const modalOpen = document.querySelectorAll(".modal-open");
    const headerCity = document.querySelectorAll(".header__city span");

    modalOpen.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault;
        document.querySelector("html").classList.add("is-lock");
        modalSelectRegion.classList.remove("hidden");
      });
    });

    modalSelectRegion.addEventListener("click", () => {
      modalSelectRegion.classList.add("hidden");
      document.querySelector("html").classList.remove("is-lock");
    });
    mapTab.forEach((item) => {
      item.addEventListener("click", () => {
        mapTab.forEach((tab) => tab.classList.remove("active"));
        item.classList.add("active");
      });
    });
    regionList.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.textContent.includes("Дальний Восток")) {
          headerCity.forEach((city) => {
            city.textContent = "Благовещенск";
          });
          mapTab[0].classList.add("active");
          mapTab[1].classList.remove("active");
          regionText.textContent = "Дальний Восток";
          address.textContent = "Благовещенск, 675000, ул. Шимановского, 27 офис 204, 2 этаж";
          address.href = "https://yandex.ru/maps/-/CHSUFRM1";
          email.textContent = "sell@dv-css.ru";
          email.href = "mailto:sell@dv-css.ru";
          phone.textContent = "+7-924-764-04-44";
          phone.href = "tel:+79247640444";
          headerPhone.forEach((phone) => {
            phone.textContent = "+7-924-764-04-44";
            phone.href = "tel:+79247640444";
          });
          telegram.forEach((tg) => {
            tg.href = "https://t.me/brash_aleks";
          });
          whatsUp.forEach((wt) => {
            wt.href = "https://wa.me/79247460144";
          });
          if (mapFrame) {
            mapFrame.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Af74ad086f7f0ebadfa72d668eb5d907fa6280112c487b1eac019a64fd94b85de&amp;source=constructor";
          }
          modalSelectRegion.classList.add("hidden");
          document.querySelector("html").classList.remove("is-lock");
        } else {
          headerCity.forEach((city) => {
            city.textContent = "Санкт-Петербург";
          });
          mapTab[1].classList.add("active");
          mapTab[0].classList.remove("active");
          regionText.textContent = "Санкт-Петербург";
          address.textContent = "г. Санкт-Петербург, Невский проспект, дом. 153";
          address.href = "https://yandex.ru/maps/-/CHSUFRM1";
          email.textContent = "sell@dv-css.ru";
          email.href = "mailto:sell@dv-css.ru";
          phone.textContent = "+7 931 204-04-44";
          phone.href = "tel:+79312040444";
          headerPhone.forEach((phone) => {
            phone.textContent = "+7 931 204-04-44";
            phone.href = "tel:+79312040444";
          });
          telegram.forEach((tg) => {
            tg.href = "https://t.me/brash_aleks";
          });
          whatsUp.forEach((wt) => {
            wt.href = "https://wa.me/79312040444";
          });
          if (mapFrame) {
            mapFrame.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa485829e6a9e9c816037342936ffe8ee9d0fb17e9c69970a92bdec3b60e9a903&amp;source=constructor";
          }
          modalSelectRegion.classList.add("hidden");
          document.querySelector("html").classList.remove("is-lock");
        }
      });
    });
  }
}
