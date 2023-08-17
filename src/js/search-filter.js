const $input = document.querySelector('#section9 input');
const $cardsList = document.querySelectorAll('.card');

export function searchFilter() {
   $cardsList.forEach((e) => {
      e.textContent.toLowerCase().match($input.value.trim().toLowerCase())
         ? e.classList.remove('filter')
         : e.classList.add('filter');
   });
}
