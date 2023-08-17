export function getGeolocation() {
   const $divGeo = document.getElementById('geolocation');
   const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
   };
   const success = (geoPosition) => {
      $divGeo.innerHTML = `
         <h4>Posición actual: </h4>
         <ul>
            <li>Latitud: ${geoPosition.coords.latitude}</li>
            <li>Longitud: ${geoPosition.coords.longitude}</li>
            <li>Precisión: ${parseInt(geoPosition.coords.accuracy)} metros</li>
         </ul>
         <p><a href="https://www.google.com/maps/@${geoPosition.coords.latitude},${
         geoPosition.coords.longitude
      },16z" target="_blank" rel="noopener">Ver en Google Maps</a></p>`;
   };
   const error = (error) => {
      $divGeo.innerHTML = `<p><b>Error ${error.code}: </b><mark>${error.message}</mark></p>`;
      console.log(`Error ${error.code}: ${error.message}`);
   };

   navigator.geolocation.getCurrentPosition(success, error, options);
}
