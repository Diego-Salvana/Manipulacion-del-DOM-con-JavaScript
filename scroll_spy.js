export function scrollSpy() {
   const $sections = document.querySelectorAll('.section[data-scroll-spy]');

   function callback(entries) {
      entries.forEach((entry) => {
         const id = entry.target.getAttribute('id');

         if (entry.isIntersecting)
            document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
         else
            document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
      });
   }

   const observer = new IntersectionObserver(callback, { threshold: [0.5, 0.75] });
   $sections.forEach((el) => observer.observe(el));
}
