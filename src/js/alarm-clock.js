export function clock() {
   const $clockElement = document.querySelector('#clock');
   const $clockActivateBtn = document.querySelector('#activate-clock');

   let intervalTempo;

   document.addEventListener('click', (e) => {
      if (e.target.matches('#activate-clock')) {
         intervalTempo = setInterval(() => {
            let hour = new Date().toLocaleTimeString();
            $clockElement.innerHTML = `<h2>${hour}</h2>`;
         }, 1000);

         $clockActivateBtn.setAttribute('disabled', true);
      }

      if (e.target.matches('#deactivate-clock')) {
         clearInterval(intervalTempo);
         $clockActivateBtn.removeAttribute('disabled');
         $clockElement.innerHTML = null;
      }
   });
}

export function alarm() {
   const $alarm = document.createElement('audio');
   const $alarmActivateBtn = document.querySelector('#activate-alarm');
   const $alarmStopBtn = document.querySelector('#deactivate-alarm');

   $alarm.src = './assets/alarma.mp3';

   let alarmSet;
   $alarmActivateBtn.addEventListener('click', () => {
      alarmSet = setInterval(() => {
         $alarm.play();
         $alarmActivateBtn.setAttribute('disabled', true);
      }, 1);
   });

   $alarmStopBtn.addEventListener('click', () => {
      clearInterval(alarmSet);
      $alarm.pause();
      $alarm.currentTime = 0;
      $alarmActivateBtn.removeAttribute('disabled');
   });
}
