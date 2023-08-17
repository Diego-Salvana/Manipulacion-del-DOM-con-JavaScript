const $video = document.getElementById('webcam');
const $startBtn = document.getElementById('start-webcam');
const $closeBtn = document.getElementById('stop-webcam');

function stopWebcam(stream) {
   stream.getTracks().forEach((e) => e.stop());
   $video.srcObject = null;
   $closeBtn.classList.remove('btn-active');
}

export function webCam() {
   navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: { max: 800 } } })
      .then((stream) => {
         $video.srcObject = stream;
         $video.play();
         $closeBtn.classList.add('btn-active');

         $closeBtn.addEventListener('click', () => stopWebcam(stream));
      })
      .catch((error) => {
         $video.insertAdjacentHTML('beforebegin', `<p><b>¡Ocurrió un error!</b><mark>${error}</mark></p>`);
         console.log(`Ocurrió un error! ${error}`);
         $startBtn.setAttribute('disabled', true);
      });
}
