const menu = document.querySelector('.modal-menu-backdrop');
console.log(menu);
const menuOpen = document.querySelector('[data-modal-open]');
const menuClose = document.querySelector('[data-modal-close]');
menuOpen.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  menu.classList.remove('is-hidden');
}

function closeMobileMenu() {
  menu.classList.add('is-hidden');
}
