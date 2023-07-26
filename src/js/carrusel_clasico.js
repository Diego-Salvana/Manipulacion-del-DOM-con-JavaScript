export function classicSlider() {
   const $slidesListContainer = document.querySelector('.classic-slides'),
      $prevBtnAndIcon = document.querySelectorAll('.slider-container [data-pb]'),
      $nextBtnAndIcon = document.querySelectorAll('.slider-container [data-nb]'),
      widthContainer = document.querySelectorAll('.classic-slide').length * 100;

   $slidesListContainer.style.width = `${widthContainer}%`;

   function next() {
      const $firstSlide = document.querySelectorAll('.classic-slide')[0];

      $nextBtnAndIcon.forEach((el) => (el.style.pointerEvents = 'none'));
      $slidesListContainer.style.transition = 'all .5s linear';
      $slidesListContainer.style.marginLeft = '-200%';
      setTimeout(() => {
         $slidesListContainer.style.transition = 'none';
         $slidesListContainer.insertAdjacentElement('beforeend', $firstSlide);
         $slidesListContainer.style.marginLeft = '-100%';
         $nextBtnAndIcon.forEach((el) => (el.style.pointerEvents = 'auto'));
      }, 500);
   }

   function prev() {
      const $lastSlide =
         document.querySelectorAll('.classic-slide')[
            document.querySelectorAll('.classic-slide').length - 1
         ];

      $prevBtnAndIcon.forEach((el) => (el.style.pointerEvents = 'none'));
      $slidesListContainer.style.transition = 'all .5s linear';
      $slidesListContainer.style.marginLeft = '0';
      setTimeout(() => {
         $slidesListContainer.style.transition = 'none';
         $slidesListContainer.insertAdjacentElement('afterbegin', $lastSlide);
         $slidesListContainer.style.marginLeft = '-100%';
         $prevBtnAndIcon.forEach((el) => (el.style.pointerEvents = 'auto'));
      }, 500);
   }

   let interval;
   const playInterval = () => (interval = setInterval(() => next(), 8000));
   playInterval();

   document.addEventListener('click', (e) => {
      if (
         e.target.matches('.classic-slider-btn-next') ||
         e.target.matches(`.classic-slider-btn-next *`)
      ) {
         clearInterval(interval);
         next();
         playInterval();
      }

      if (
         e.target.matches('.classic-slider-btn-prev') ||
         e.target.matches(`.classic-slider-btn-prev *`)
      ) {
         clearInterval(interval);
         prev();
         playInterval();
      }
   });
}
