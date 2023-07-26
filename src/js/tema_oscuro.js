const $elementsListTheme = document.querySelectorAll('[data-dark]'),
   $themeBtn = document.querySelector('.dark-theme-btn');

function darkMode() {
   $elementsListTheme.forEach((element) => element.classList.add('dark-mode'));
   $themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

function lightMode() {
   $elementsListTheme.forEach((element) => element.classList.remove('dark-mode'));
   $themeBtn.innerHTML = '<i class="fa-solid fa-moon">';
}

export function darkTheme() {
   if (localStorage.getItem('darkMode')) darkMode();

   $themeBtn.addEventListener('click', () => {
      if (!localStorage.getItem('darkMode')) {
         darkMode();
         localStorage.setItem('darkMode', 'true');
      } else {
         lightMode();
         localStorage.removeItem('darkMode');
      }
   });
}
