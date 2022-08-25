export function hamburgerMenu() {
   const $panelBtn = document.querySelector('.panel-btn'),
      $panelAside = document.querySelector('.panel'),
      $menuLink = document.querySelector('.menu');

   $panelBtn.addEventListener('click', () => {
      $panelAside.classList.toggle('is-active');
      $panelBtn.classList.toggle('is-active');
   });

   $menuLink.addEventListener('click', () => {
      $panelAside.classList.remove('is-active');
      $panelBtn.classList.remove('is-active');
   });
}
