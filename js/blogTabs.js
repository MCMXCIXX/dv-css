document.addEventListener("DOMContentLoaded", function () {
  const tagButtons = document.querySelectorAll(".blog-tags__item");
  const cards = document.querySelectorAll(".blog-card");

  tagButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      tagButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tag = btn.textContent.trim();
      cards.forEach((card) => {
        const cardTag = card.querySelector(".blog-card__tag")?.textContent.trim();
        if (tag === "Все статьи" || cardTag === tag) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
