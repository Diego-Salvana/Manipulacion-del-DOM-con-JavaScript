export function hamburgerMenu() {
   const $panelBtn = document.querySelector('.panel-btn');
   const $panelAside = document.querySelector('.panel');
   const $menuLink = document.querySelector('.menu');

   $panelBtn.addEventListener('click', () => {
      $panelAside.classList.toggle('is-active');
      $panelBtn.classList.toggle('is-active');
   });

   $menuLink.addEventListener('click', () => {
      $panelAside.classList.remove('is-active');
      $panelBtn.classList.remove('is-active');
   });
}
