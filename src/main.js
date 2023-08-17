import { alarm, clock } from './js/alarm-clock.js';
import { classicSlider } from './js/classic-slider.js';
import { closeResponsiveTester, responsiveTester } from './js/responsive-tester.js';
import { darkTheme } from './js/dark-mode.js';
import { deleteDate, countdown, setDate } from './js/date-countdown.js';
import { fadeSlider } from './js/fade-slider.js';
import { formValidation } from './js/contact-form.js';
import { getGeolocation } from './js/geolocation.js';
import { hamburgerMenu } from './js/hamburger--menu.js';
import { lottery } from './js/digital-lottery.js';
import { moveBall, shortcuts } from './js/keyboard-events.js';
import { networkStatus } from './js/network-detection.js';
import { responsiveMedia } from './js/responsive-media.js';
import { scrollSpy } from './js/scroll-spy.js';
import { searchFilter } from './js/search-filter.js';
import { showTopButton, toTop } from './js/scroll_button.js';
import { smartVideo } from './js/automatic-video.js';
import { speechReader } from './js/narrator.js';
import { userDeviceInfo } from './js/device-detection.js';
import { webCam } from './js/webcam-detection.js';

const $stage = document.querySelector('.stage');
const $formTester = document.getElementById('responsive-tester');

document.addEventListener('DOMContentLoaded', () => {
   hamburgerMenu();
   clock();
   alarm();
   countdown();
   darkTheme();
   responsiveMedia(
      'youtube',
      '(min-width: 1400px)',
      `<a href="https://youtu.be/JmWy0yOit2I" target="_blank" rel="noopener">Ver video</a>`,
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/JmWy0yOit2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
   );
   responsiveMedia(
      'gmaps',
      '(min-width: 1400px)',
      `<a href="https://goo.gl/maps/ke1jyNvKX8mE9aec8" target="_blank" rel="noopener">Ver mapa</a>`,
      `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13391.564164954332!2d-60.656629!3d-32.953886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4384826e2b35533!2sMuseo%20Municipal%20de%20Bellas%20Artes%20Juan%20B.%20Castagnino!5e0!3m2!1ses-419!2sar!4v1660175796457!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
   );
   userDeviceInfo();
   fadeSlider();
   classicSlider();
   scrollSpy();
   smartVideo();
   formValidation();
});

document.addEventListener('keydown', (e) => {
   shortcuts(e);
   if ($stage.className.includes('stage-active')) moveBall(e, '.ball', '.stage');
});

document.addEventListener('click', (e) => {
   if (e.target === $stage || e.target.matches(`.stage *`)) $stage.classList.toggle('stage-active');
   else $stage.classList.remove('stage-active');

   if (e.target.matches('.delete-date')) deleteDate();

   if (e.target.matches('.scroll-top-btn')) toTop();

   if (e.target === $formTester.close) closeResponsiveTester();

   if (e.target.matches('#start-webcam')) webCam();

   if (e.target.matches('#section8 .btn')) getGeolocation();

   if (e.target.matches('#winner-btn')) lottery('.player');
});

document.addEventListener('submit', (e) => {
   if (e.target.matches('.countdown-form')) setDate(e);

   if (e.target === $formTester) responsiveTester(e);
});

document.addEventListener('keyup', (e) => {
   if (e.target.matches('#section9 input')) searchFilter();
});

window.addEventListener('scroll', () => {
   showTopButton();
});

networkStatus();
speechReader();
