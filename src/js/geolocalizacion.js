export function getGeolocation() {
   const $divGeo = document.getElementById('geolocation'),
      options = {
         enableHighAccuracy: true,
         timeout: 5000,
         maximumAge: 0,
      },
      success = (success) => {
         $divGeo.innerHTML = `
         <h4>Posición actual: </h4>
         <ul>
            <li>Latitud: ${success.coords.latitude}</li>
            <li>Longitud: ${success.coords.longitude}</li>
            <li>Precisión: ${success.coords.accuracy} metros</li>
         </ul>
         <p><a href="https://www.google.com/maps/@${success.coords.latitude},${success.coords.longitude},16z" target="_blank" rel="noopener">Ver en Google Maps</a></p>`;
      },
      error = (error) => {
         $divGeo.innerHTML = `<p><b>Error ${error.code}: </b><mark>${error.message}</mark></p>`;
         console.log(`Error ${error.code}: ${error.message}`);
      };

   navigator.geolocation.getCurrentPosition(success, error, options);
}
