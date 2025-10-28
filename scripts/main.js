window.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.getElementById("marker-info");

  const markerDescriptions = {
    "marker-nest1": "Encontraste el mapa! Como veras, la comunidad de universidades católicas es vasta, y sus fundaciones también. Dentro del contexto de las universidades del mundo, la nuestra es bastante reciente, sobretodo cuando la comparamos con universidades que vienen activas desde el 1900. Pero hemos logrado mucho en estos años. Recuerdo haber visto una placa conmemorativa por algun lado...",
    "marker-nest2": "Esta placa muestra los 25 años de la UCU, y con ella, deberíamos mirar un poco hacia atrás. En este momento, el edificio central era lo único que había, y los edificios de Salto y Punta del Este no tenían más de 10 años.Hoy en día, la expansión de la universidad es tal que hay un círculo de edificios por esta zona. Pero suficiente del pasado, es hora de mirar al presente, y qué mejor lugar que donde se celebraron los 40 años! Ve, toma un poco de aire y disfruta de una de las piezas de arte más grandes que ofrece la universidad.",
    "marker-nest3": "Y ahora, a por muchos años más! Gracias por jugar nuestra cacería!",
  };

  const markers = Object.keys(markerDescriptions);

  markers.forEach((id) => {
    const marker = document.getElementById(id);

    // Cuando el marcador se detecta
    marker.addEventListener("markerFound", () => {
      infoBox.textContent = markerDescriptions[id];
    });

    // Cuando el marcador se pierde
    marker.addEventListener("markerLost", () => {
      infoBox.textContent = "Escanea un marcador para ver su descripción.";
    });
  });
});
