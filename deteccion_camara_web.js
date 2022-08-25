const $video = document.getElementById('webcam'),
   $iniciarBtn = document.getElementById('iniciar-webcam'),
   $cerrarBtn = document.getElementById('cerrar-webcam');

function stopWebcam(stream) {
   stream.getTracks().forEach((e) => e.stop());
   $video.srcObject = null;
   $cerrarBtn.classList.remove('btn-active');
}
export function webCam() {
   navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: { max: 800 } } })
      .then((stream) => {
         $video.srcObject = stream;
         $video.play();
         $cerrarBtn.classList.add('btn-active');

         $cerrarBtn.addEventListener('click', () => stopWebcam(stream));
      })
      .catch((error) => {
         $video.insertAdjacentHTML(
            'beforebegin',
            `<p><b>¡Ocurrió un error!</b><mark>${error}</mark></p>`
         );
         console.log(`Ocurrió un error! ${error}`);
         $iniciarBtn.setAttribute('disabled', true);
      });
}
