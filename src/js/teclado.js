let x = 0,
   y = 0;

export function moveBall(e, ball, stage) {
   const $ball = document.querySelector(ball),
      $stage = document.querySelector(stage),
      limitsBall = $ball.getBoundingClientRect(),
      limitsStage = $stage.getBoundingClientRect();

   switch (e.keyCode) {
      case 37:
      case 65:
         e.preventDefault();
         if (limitsBall.left - limitsStage.left >= 10) x--;
         else x -= (limitsBall.left - limitsStage.left) / 10;
         break;
      case 38:
      case 87:
         e.preventDefault();
         if (limitsBall.top - limitsStage.top >= 10) y--;
         else y -= (limitsBall.top - limitsStage.top) / 10;
         break;
      case 39:
      case 68:
         e.preventDefault();
         if (limitsStage.right - limitsBall.right >= 10) x++;
         else x += (limitsStage.right - limitsBall.right) / 10;
         break;
      case 40:
      case 83:
         e.preventDefault();
         if (limitsStage.bottom - limitsBall.bottom >= 10) y++;
         else y += (limitsStage.bottom - limitsBall.bottom) / 10;
         break;
   }

   $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
   if (e.key === 'r' && e.altKey) alert('Hello');
}
