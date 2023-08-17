export function lottery(selector) {
   const $players = document.querySelectorAll(selector);
   const random = Math.floor(Math.random() * $players.length);
   const winner = $players[random].textContent;

   console.log('El ganador es :', winner);
   alert(`El ganador es: ${winner}`);
}
