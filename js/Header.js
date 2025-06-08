export default class Header {
  constructor() {
    const burger = document.querySelector('.burger');
    const burgerIcon = document.querySelector('.burger__burger-icon');
    const closeIcon = document.querySelector('.burger__close-icon');
    const menu = document.querySelector('.header__menu-wrapper');

    if (!burger || !burgerIcon || !closeIcon || !menu) return;

    function toggleMenu() {
      const isOpen = burger.classList.toggle('is-active');
      burgerIcon.classList.toggle('hidden', isOpen);
      closeIcon.classList.toggle('hidden', !isOpen);
      menu.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    }

    burger.addEventListener('click', toggleMenu);
    burger.addEventListener('touchstart', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }
}