export function reloj() {
   const $reloj = document.querySelector('#reloj'),
      $iniciarRelojBtn = document.querySelector('#activar-reloj');

   let intervalTempo;

   document.addEventListener('click', (e) => {
      if (e.target.matches('#activar-reloj')) {
         intervalTempo = setInterval(() => {
            let hora = new Date().toLocaleTimeString();
            $reloj.innerHTML = `<h2>${hora}</h2>`;
         }, 1000);

         $iniciarRelojBtn.setAttribute('disabled', true);
      }

      if (e.target.matches('#desactivar-reloj')) {
         clearInterval(intervalTempo);
         $iniciarRelojBtn.removeAttribute('disabled');
         $reloj.innerHTML = null;
      }
   });
}

export function alarma() {
   const $alarma = document.createElement('audio'),
      $iniciarAlarmaBtn = document.querySelector('#activar-alarma'),
      $detenerAlarmaBtn = document.querySelector('#desactivar-alarma');

   $alarma.src = './assets/despierta.mp3';

   let alarmaSet;
   $iniciarAlarmaBtn.addEventListener('click', () => {
      alarmaSet = setInterval(() => {
         $alarma.play();
         $iniciarAlarmaBtn.setAttribute('disabled', true);
      }, 1);
   });

   $detenerAlarmaBtn.addEventListener('click', () => {
      clearInterval(alarmaSet);
      $alarma.pause();
      $alarma.currentTime = 0;
      $iniciarAlarmaBtn.removeAttribute('disabled');
   });
}
