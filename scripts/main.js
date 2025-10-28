window.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.getElementById("marker-info");
  const soundPlayer = document.getElementById("sound-player");

  // Secuencia de pasos de la cacería
  const sequence = [
    {
      id: "marker-nest1",
      text: "Encontraste el mapa! Como verás, la comunidad de universidades católicas es vasta, y sus fundaciones también. Dentro del contexto de las universidades del mundo, la nuestra es bastante reciente, sobretodo cuando la comparamos con universidades que vienen activas desde el 1900. Pero hemos logrado mucho en estos años. Recuerdo haber visto una placa conmemorativa por algún lado...",
    },
    {
      id: "marker-nest2",
      text: "Esta placa muestra los 25 años de la UCU, y con ella, deberíamos mirar un poco hacia atrás. En este momento, el edificio central era lo único que había, y los edificios de Salto y Punta del Este no tenían más de 10 años. Hoy en día, la expansión de la universidad es tal que hay un círculo de edificios por esta zona. Pero suficiente del pasado, es hora de mirar al presente, y qué mejor lugar que donde se celebraron los 40 años! Ve, toma un poco de aire y disfruta de una de las piezas de arte más grandes que ofrece la universidad.",
    },
    {
      id: "marker-nest3",
      text: "Y ahora, a por muchos años más! Gracias por jugar nuestra cacería!",
    },
  ];

  let currentStep = 0; // empieza en la pista inicial
  let unlockedSteps = new Set(); // marcadores ya activados

  // Mostrar texto inicial
  infoBox.textContent =
    "Bienvenido a la cacería del tesoro de la UCU! Esta cacería está ambientada en la historia de la UCU, que ahora celebra sus 40 años. Para empezar, qué mejor que ubicarnos dentro del contexto del resto de universidades católicas. Si tan sólo hubiera algo en estas instalaciones que las mostrase a todas...";

  // Función para avanzar a la siguiente pista
  function unlockStep(index) {
    const step = sequence[index];
    if (!step) return;

    unlockedSteps.add(step.id);
    currentStep = index + 1; // avanza al siguiente paso
    infoBox.textContent = step.text;

    // reproducir sonido si existe
    if (soundPlayer && soundPlayer.components?.sound) {
      soundPlayer.components.sound.playSound();
    }
  }

  // Escuchar los marcadores
  sequence.forEach((step, index) => {
    const marker = document.getElementById(step.id);
    if (!marker) return;

    marker.addEventListener("markerFound", () => {
      // Solo avanza si es el siguiente marcador en orden
      if (index === unlockedSteps.size) {
        unlockStep(index);
      }
    });
  });
});
