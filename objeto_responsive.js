export function responsiveMedia(id, mq, mobileContent, desktopContent) {
   const $element = document.getElementById(id);

   let breakpoint = window.matchMedia(mq);

   function responsive(e) {
      if (e.matches) $element.innerHTML = desktopContent;
      else $element.innerHTML = mobileContent;
   }

   responsive(breakpoint);

   breakpoint.addEventListener('change', responsive);
}
