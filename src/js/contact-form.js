export function formValidation() {
   const $form = document.forms['contact-form'];
   const $inputs = document.querySelectorAll('.contact-form [required]');

   $inputs.forEach((input) => {
      const $span = document.createElement('span');

      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add('contact-form-error', 'none');
      input.insertAdjacentElement('afterend', $span);

      const pattern = input.pattern || input.dataset.pattern;
      const regex = new RegExp(pattern);

      input.addEventListener('blur', () => {
         if (pattern) {
            if (!regex.test(input.value)) {
               input.classList.add('invalid');
               $span.classList.add('is-active');
            } else {
               input.classList.remove('invalid');
               $span.classList.remove('is-active');
            }
         } else {
            if (input.value === '') {
               input.classList.add('invalid');
               $span.classList.add('is-active');
            } else {
               input.classList.remove('invalid');
               $span.classList.remove('is-active');
            }
         }
      });
   });

   $form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('El formulario ha sido enviado.');
      $form.reset();
   });
}
