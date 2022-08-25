const $contadorDiv = document.querySelector('.countdown'),
   $fechaUsuario = document.querySelector('.text-fecha'),
   $formCuentaReg = document.querySelector('.form-cuenta'),
   $borrarFechaBtn = document.querySelector('.borrar-fecha');
let fecha, mensaje, contador;

export function cuentaRegresiva() {
   let dias, horas, minutos, segundos;

   if (!localStorage.getItem('fecha')) {
      fecha = new Date('Jan 1, 2023').getTime();
      mensaje = '2023';
      $borrarFechaBtn.classList.add('button-inactive');
   } else {
      fecha = new Date(localStorage.getItem('fecha')).getTime();
      mensaje = localStorage.getItem('fecha');
      $borrarFechaBtn.classList.remove('button-inactive');
   }

   // ms*1000(s)*60(min)*60(hs)*24(d)
   contador = setInterval(() => {
      let dif = fecha - Date.now();

      if (isNaN(dif)) return borrarFecha();

      dias = Math.floor(dif / (1000 * 60 * 60 * 24));
      horas = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutos = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
      segundos = Math.floor((dif % (1000 * 60)) / 1000);

      $contadorDiv.innerHTML = `<p><span>Faltan:</span> <span><b>${dias}</b> Días</span> <span><b>${horas}</b> Horas</span> <span><b>${minutos}</b> Minutos</span> <span><b>${segundos}</b> Segundos</span></p>`;
      $fechaUsuario.innerHTML = `<p>Para el ${mensaje}</p>`;

      if (dif <= 0) {
         clearInterval(contador);
         $contadorDiv.innerHTML = '<p>Felicitaciones, llegó la fecha.</p>';
      }
   }, 1000);
}

export function setFecha(e) {
   e.preventDefault();
   if (!$formCuentaReg.fecha.value) return;
   clearInterval(contador);
   localStorage.setItem('fecha', $formCuentaReg.fecha.value);
   cuentaRegresiva();
}

export function borrarFecha() {
   clearInterval(contador);
   localStorage.removeItem('fecha');
   cuentaRegresiva();
   $formCuentaReg.fecha.value = null;
}
