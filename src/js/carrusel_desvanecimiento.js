export function fadeSlider() {
   const $slidesList = document.querySelectorAll('.slide');

   let i = 0;

   function prev() {
      $slidesList[i].classList.remove('active');
      i--;
      if (i < 0) i = $slidesList.length - 1;
      $slidesList[i].classList.add('active');
   }

   function netx() {
      $slidesList[i].classList.remove('active');
      i++;
      if (i >= $slidesList.length) i = 0;
      $slidesList[i].classList.add('active');
   }

   let interval;
   const playInterval = () => (interval = setInterval(() => netx(), 8000));
   playInterval();

   document.addEventListener('click', (e) => {
      if (e.target.matches('.slider-btn.btn-next') || e.target.matches(`.slider-btn.btn-next *`)) {
         clearInterval(interval);
         netx();
         playInterval();
      }

      if (e.target.matches('.slider-btn.btn-prev') || e.target.matches(`.slider-btn.btn-prev *`)) {
         clearInterval(interval);
         prev();
         playInterval();
      }
   });
}
