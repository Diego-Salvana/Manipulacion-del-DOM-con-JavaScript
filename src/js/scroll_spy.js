export function scrollSpy() {
   const $sections = document.querySelectorAll('.section[data-scroll-spy]');

   function callback(entries) {
      entries.forEach((entry) => {
         const id = entry.target.getAttribute('id');
         const anchor = document.querySelector(`a[data-scroll-spy][href="#${id}"]`);

         if (entry.isIntersecting) anchor.classList.add('active');
         else anchor.classList.remove('active');
      });
   }

   const observer = new IntersectionObserver(callback, { threshold: [0.5, 0.75] });
   $sections.forEach((el) => observer.observe(el));
}
