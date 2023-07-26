import { showTopButton, toTop } from './js/boton_scroll.js';
import { classicSlider } from './js/carrusel_clasico.js';
import { fadeSlider } from './js/carrusel_desvanecimiento.js';
import { borrarFecha, cuentaRegresiva, setFecha } from './js/cuenta_regresiva.js';
import { webCam } from './js/deteccion_camara_web.js';
import { userDeviceInfo } from './js/deteccion_dispositivos.js';
import { networkStatus } from './js/deteccion_red.js';
import { searchFilter } from './js/filtros_busqueda.js';
import { formValidation } from './js/formulario_contacto.js';
import { getGeolocation } from './js/geolocalizacion.js';
import { hamburgerMenu } from './js/menu_hamburguesa.js';
import { speechReader } from './js/narrador.js';
import { responsiveMedia } from './js/objeto_responsive.js';
import { closeResponsiveTester, responsiveTester } from './js/prueba_responsive.js';
import { alarma, reloj } from './js/reloj.js';
import { scrollSpy } from './js/scroll_spy.js';
import { lottery } from './js/sorteo_digital.js';
import { moveBall, shortcuts } from './js/teclado.js';
import { darkTheme } from './js/tema_oscuro.js';
import { smartVideo } from './js/video_inteligente.js';

const $stage = document.querySelector('.stage'),
   $formTester = document.getElementById('responsive-tester');

document.addEventListener('DOMContentLoaded', () => {
   hamburgerMenu();
   reloj();
   alarma();
   cuentaRegresiva();
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

   if (e.target.matches('.borrar-fecha')) borrarFecha();

   if (e.target.matches('.scroll-top-btn')) toTop();

   if (e.target === $formTester.cerrar) closeResponsiveTester();

   if (e.target.matches('#iniciar-webcam')) webCam();

   if (e.target.matches('#seccion8 .btn')) getGeolocation();

   if (e.target.matches('#winner-btn')) lottery('.player');
});

document.addEventListener('submit', (e) => {
   if (e.target.matches('.form-cuenta')) setFecha(e);

   if (e.target === $formTester) responsiveTester(e);
});

document.addEventListener('keyup', (e) => {
   if (e.target.matches('#seccion9 input')) searchFilter();
});

window.addEventListener('scroll', () => {
   showTopButton();
});

networkStatus();
speechReader();
