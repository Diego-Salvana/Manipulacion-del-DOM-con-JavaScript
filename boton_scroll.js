const $scrollTopBtn = document.querySelector('.scroll-top-btn');

export function showTopButton() {
   let scroll = document.documentElement.scrollTop;

   if (scroll > 600) $scrollTopBtn.classList.remove('hidden');
   else $scrollTopBtn.classList.add('hidden');
}

export function toTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
}
