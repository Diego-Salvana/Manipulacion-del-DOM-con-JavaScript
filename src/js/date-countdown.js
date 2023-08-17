const $countdownDiv = document.querySelector('.countdown');
const $dateText = document.querySelector('.date-text');
const $countdownForm = document.querySelector('.countdown-form');
const $deleteDateBtn = document.querySelector('.delete-date');
let date, message, count;

export function countdown() {
   let days, hours, minutes, seconds;

   if (!localStorage.getItem('date')) {
      date = new Date('Jan 1, 2024').getTime();
      message = '2024';
      $deleteDateBtn.classList.add('inactive-button');
   } else {
      date = new Date(localStorage.getItem('date')).getTime();
      message = localStorage.getItem('date');
      $deleteDateBtn.classList.remove('inactive-button');
   }

   // ms*1000(s)*60(min)*60(hs)*24(d)
   count = setInterval(() => {
      let dif = date - Date.now();

      if (isNaN(dif)) return deleteDate();

      days = Math.floor(dif / (1000 * 60 * 60 * 24));
      hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((dif % (1000 * 60)) / 1000);

      $countdownDiv.innerHTML = `<p><span>Faltan:</span> <span><b>${days}</b> Días</span> <span><b>${hours}</b> Horas</span> <span><b>${minutes}</b> Minutos</span> <span><b>${seconds}</b> Segundos</span></p>`;
      $dateText.innerHTML = `<p>Para el ${message}</p>`;

      if (dif <= 0) {
         clearInterval(count);
         $countdownDiv.innerHTML = '<p>Felicitaciones, llegó la fecha.</p>';
      }
   }, 1000);
}

export function setDate(e) {
   e.preventDefault();
   if (!$countdownForm.date.value) return;
   clearInterval(count);
   localStorage.setItem('date', $countdownForm.date.value);
   countdown();
}

export function deleteDate() {
   clearInterval(count);
   localStorage.removeItem('date');
   $countdownForm.date.value = null;
   countdown();
}
