const $div = document.createElement('div');

function isOnLine() {
   if (navigator.onLine) {
      $div.textContent = 'Conexión Reestablecida';
      $div.classList.add('online');
      $div.classList.remove('offline');
   } else {
      $div.textContent = 'Conexión Perdida';
      $div.classList.add('offline');
      $div.classList.remove('online');
   }

   document.body.appendChild($div);
   setTimeout(() => document.body.removeChild($div), 2000);
}

export function networkStatus() {
   window.addEventListener('online', () => isOnLine());
   window.addEventListener('offline', () => isOnLine());
}
