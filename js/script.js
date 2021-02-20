window.onload = function() {

  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = document.querySelector('.burger__btn');

  burgerBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('showHeaderMunu');
  });

};