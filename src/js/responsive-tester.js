const $formTester = document.forms['responsive-tester'];
let newWindowTester;

export function responsiveTester(e) {
   e.preventDefault();

   newWindowTester = window.open(
      `${$formTester.direction.value}`,
      'Responsive Tester',
      `left=200, top=20, width=${$formTester.width.value}, height=${$formTester.height.value}`
   );
}

export function closeResponsiveTester() {
   if (newWindowTester !== undefined) newWindowTester.close();
   $formTester.reset();
}
