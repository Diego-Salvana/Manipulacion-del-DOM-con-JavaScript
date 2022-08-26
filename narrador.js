export function speechReader() {
   const $speechSelect = document.getElementById('speech-select'),
      $speechTextarea = document.getElementById('speech-text'),
      $speechBtn = document.getElementById('speech-btn'),
      speechMessage = new SpeechSynthesisUtterance();

   let voices = [];
   document.addEventListener('DOMContentLoaded', () => {
      speechSynthesis.addEventListener('voiceschanged', () => {
         voices = speechSynthesis.getVoices();
         voices.forEach((voice) => {
            const $option = document.createElement('option');
            $option.value = voice.name;
            $option.textContent = `${voice.name} - [${voice.lang}]`;

            $speechSelect.appendChild($option);
         });
      });
   });

   document.addEventListener('change', (e) => {
      if (e.target === $speechSelect)
         speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
   });

   document.addEventListener('click', (e) => {
      if (e.target === $speechBtn) {
         e.preventDefault();
         if ($speechTextarea.value === '') return;
         speechMessage.text = $speechTextarea.value;
         speechSynthesis.speak(speechMessage);
      }

      if (e.target.matches('#speech-cancel')) {
         e.preventDefault();
         speechSynthesis.cancel();
      }
   });
}
