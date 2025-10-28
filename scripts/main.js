window.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.getElementById("marker-info");
  const soundPlayer = document.getElementById("sound-player");

  const sequence = [
    {
      id: "marker-nest1",
      text: "Encontraste el mapa! Como verás, la comunidad de universidades católicas es vasta...",
    },
    {
      id: "marker-nest2",
      text: "Esta placa muestra los 25 años de la UCU... hora de mirar al presente.",
    },
    {
      id: "marker-nest3",
      text: "Y ahora, a por muchos años más! Gracias por jugar nuestra cacería!",
    },
  ];

  let currentStep = 0;
  let completed = new Set();

  function advanceToStep(stepIndex) {
    const step = sequence[stepIndex];
    infoBox.textContent = step.text;

    // reproducir sonido al avanzar
    if (soundPlayer && soundPlayer.components && soundPlayer.components.sound) {
      soundPlayer.components.sound.playSound();
    }

    currentStep = stepIndex;
    completed.add(step.id);
  }

  sequence.forEach((step, index) => {
    const marker = document.getElementById(step.id);
    if (!marker) return;

    marker.addEventListener("markerFound", () => {
      // sólo avanza si es el paso correcto
      if (index === currentStep && !completed.has(step.id)) {
        advanceToStep(index);
      }
    });

    marker.addEventListener("markerLost", () => {
      // no hacemos nada al perderlo, para mantener el texto del último paso
    });
  });

  // texto inicial
  infoBox.textContent =
    "Bienvenido a la cacería del tesoro de la UCU! Esta cacería está ambientada en la historia de la UCU, que ahora celebra sus 40 años...";
});
