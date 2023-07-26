const $userDivice = document.getElementById('user-device'),
   uAgent = navigator.userAgent;

export function userDeviceInfo() {
   let browserName = '';

   if (navigator.userAgentData.brands[2]) browserName = navigator.userAgentData.brands[2].brand;

   const isMobile = {
         android: () => uAgent.match(/android/i),
         ios: () => uAgent.match(/iphone|ipad|ipod/i),
         any: function () {
            return this.android() || this.ios();
         },
      },
      isDesktop = {
         linux: () => uAgent.match(/linux/i),
         windows: () => uAgent.match(/windows nt/i),
         mac: () => uAgent.match(/mac os/i),
         any: function () {
            return this.linux() || this.windows() || this.mac();
         },
      },
      browser = {
         chrome: () => browserName.match(/google chrome/i),
         brave: () => browserName.match(/brave/i),
         edge: () => browserName.match(/microsoft edge/i),
         safari: () => browserName.match(/safari/i) || uAgent.match(/safari/i),
         firefox: () => browserName.match(/firefox/i) || uAgent.match(/firefox/i),
         opera: () => browserName.match(/opera|opera mini/i) || uAgent.match(/opera|opera mini/i),
         ie: () => browserName.match(/msie|iemobile/i) || uAgent.match(/msie|iemobile/i),
         any: function () {
            return (
               this.ie() ||
               this.edge() ||
               this.chrome() ||
               this.brave() ||
               this.opera() ||
               this.firefox() ||
               this.safari()
            );
         },
      };

   let img = '';

   switch (browser.any()[0]) {
      case 'Google Chrome':
         img = '<img src="https://assets.stickpng.com/images/588525cd6f293bbfae451a37.png"/>';
         break;
      case 'Brave':
         img = '<img src="https://img.icons8.com/ios/500/brave-web-browser.png"/>';
         break;
      case 'Safari':
         img = '<img src="https://cdn-icons-png.flaticon.com/512/564/564442.png"/>';
         break;
      case 'Microsoft Edge':
         img = '<img src="https://img.icons8.com/ios-glyphs/480/ms-edge-new.png"/>';
         break;
      case 'Firefox':
         img = '<img src="https://assets.stickpng.com/images/5847f407cef1014c0b5e4889.png"/>';
         break;
   }

   $userDivice.innerHTML = `<ul>
      <li>User Agent: <b>${navigator.userAgent}</b></li>
      <li>Plataforma: <b>${isMobile.any() || isDesktop.any()}</b></li>
      <li>Navegador: <span>${img}</span> <b>${browser.any() || 'Navegador no encontrado'}</b></li>
   </ul>`;
}
