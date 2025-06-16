export default class PersonModal {
  constructor() {
    // Select elements
    const personCardButton = document.querySelector(".person-card__button");
    const personModal = document.querySelectorAll(".person-modal");
    const personCardLink = document.querySelector(".person-card__link");
    const reviewsButton = document.querySelector(".reviews__button");

    // Function to open modal
    function modalOpen(id) {
      personModal.forEach((modal) => {
        if (modal.id === id) {
          modal.classList.add("active");
          document.querySelector("html").classList.add("is-lock");
        }
      });
    }

    // Add event listeners only if elements exist
    if (personCardButton) {
      personCardButton.addEventListener("click", () => {
        modalOpen("order-modal");
      });
    } else {
      console.warn("Element with class 'person-card__button' not found.");
    }

    if (personCardLink) {
      personCardLink.addEventListener("click", (e) => {
        e.preventDefault();
        modalOpen("question-modal");
      });
    } else {
      console.warn("Element with class 'person-card__link' not found.");
    }

    if (reviewsButton) {
      reviewsButton.addEventListener("click", (e) => {
        e.preventDefault();
        modalOpen("review-modal");
      });
    } else {
      console.warn("Element with class 'reviews__button' not found.");
    }

    // Close modal event listener
    personModal.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("person-modal__close")) {
          modal.classList.remove("active");
          document.querySelector("html").classList.remove("is-lock");
        }
      });
    });
  }
}

// Ensure DOM is fully loaded before instantiating
document.addEventListener("DOMContentLoaded", () => {
  new PersonModal();
});