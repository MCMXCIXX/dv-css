document.querySelectorAll(".rating").forEach((ratingBlock) => {
  const stars = ratingBlock.querySelectorAll(".star");
  let selected = 0;

  stars.forEach((star, idx) => {
    star.addEventListener("mouseenter", () => {
      stars.forEach((s, i) => s.classList.toggle("hovered", i <= idx));
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach((s) => s.classList.remove("hovered"));
    });

    star.addEventListener("click", () => {
      selected = idx + 1;
      stars.forEach((s, i) => s.classList.toggle("active", i < selected));
    });
  });

  ratingBlock.addEventListener("mouseleave", () => {
    stars.forEach((s, i) => {
      s.classList.remove("hovered");
      s.classList.toggle("active", i < selected);
    });
  });
});
