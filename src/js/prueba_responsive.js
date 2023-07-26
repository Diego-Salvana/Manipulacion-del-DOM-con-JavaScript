const $formTester = document.forms['responsive-tester'];
let newWindowTester;

export function responsiveTester(e) {
   e.preventDefault();

   newWindowTester = window.open(
      `${$formTester.direccion.value}`,
      'Responsive Tester',
      `left=200, top=20, width=${$formTester.ancho.value}, height=${$formTester.alto.value}`
   );
}

export function closeResponsiveTester() {
   if (newWindowTester !== undefined) newWindowTester.close();
   $formTester.reset();
}
