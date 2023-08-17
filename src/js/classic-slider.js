export function classicSlider() {
   const $slidesListContainer = document.querySelector('.classic-slides');
   const $prevBtnAndIcon = document.querySelectorAll('.slider-container [data-pb]');
   const $nextBtnAndIcon = document.querySelectorAll('.slider-container [data-nb]');
   const slidesListLength = document.querySelectorAll('.classic-slide').length;

   $slidesListContainer.style.width = `${slidesListLength * 100}%`;

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
      const $slidesList = document.querySelectorAll('.classic-slide');
      const $lastSlide = $slidesList[$slidesList.length - 1];

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
   const playInterval = () => (interval = setInterval(() => next(), 6000));
   playInterval();

   document.addEventListener('click', (e) => {
      if (e.target.matches('.classic-slider-btn-next') || e.target.matches(`.classic-slider-btn-next *`)) {
         clearInterval(interval);
         next();
         playInterval();
      }

      if (e.target.matches('.classic-slider-btn-prev') || e.target.matches(`.classic-slider-btn-prev *`)) {
         clearInterval(interval);
         prev();
         playInterval();
      }
   });
}
