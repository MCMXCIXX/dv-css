export default class CheckList {
  constructor() {
    const checkListBlock = document.querySelectorAll(".check-list__block");
    const checkListPagination = document.querySelectorAll(".check-list__pagination");
    const checkListLastScreen = document.querySelector(".check-list__last-screen");

    checkListPagination.forEach((item, index) => {
      for (let i = 0; i < checkListPagination.length; i++) {
        const paginationItem = document.createElement("span");
        paginationItem.classList.add("check-list__pagination-item");
        if (i === index) {
          paginationItem.classList.add("active");
        }
        item.appendChild(paginationItem);
      }
    });
    checkListBlock.forEach((block, index) => {
      block.addEventListener("click", (e) => {
        console.log(e.target.classList.contains("check-list__button"));
        if (e.target.classList.contains("next")) {
          e.preventDefault();
          if (index === checkListBlock.length - 1) {
            block.classList.add("hidden");
            checkListLastScreen.classList.remove("hidden");
          } else {
            block.classList.add("hidden");
            checkListBlock[index + 1].classList.remove("hidden");
          }
        } else if (e.target.classList.contains("prev")) {
          e.preventDefault();
          block.classList.add("hidden");
          checkListBlock[index - 1].classList.remove("hidden");
        }
      });
    });
  }
}
