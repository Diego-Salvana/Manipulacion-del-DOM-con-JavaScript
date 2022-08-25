export function lottery(selector) {
   const $players = document.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random].textContent;

   console.log('El ganador es :', winner);
   alert(`El ganador es: ${winner}`);
}
