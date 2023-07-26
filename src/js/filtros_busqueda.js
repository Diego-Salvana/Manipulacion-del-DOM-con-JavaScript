const $input = document.querySelector('#seccion9 input'),
   $cardsList = document.querySelectorAll('.card');

export function searchFilter() {
   $cardsList.forEach((e) => {
      e.textContent.toLowerCase().match($input.value.toLowerCase())
         ? e.classList.remove('filter')
         : e.classList.add('filter');
   });
}
