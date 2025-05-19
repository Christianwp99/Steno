// Vælg alle elementer med klassen 'flip-container'
document.querySelectorAll('.flip-container').forEach(container => {
  
  // Tilføj en klik-eventlistener til hvert element
  container.addEventListener('click', () => {
    
    // Når der klikkes, tilføjes eller fjernes klassen 'flipped'
    container.classList.toggle('flipped');
  });
});

// Find elementet med id="graf"
document.getElementById("graf").addEventListener("click", function () {
  const graf = this;

  // Fjern 'rotating'-klassen for at kunne genstarte animationen
  graf.classList.remove("rotating");

  // Trigger reflow for at sikre at animationen nulstilles
  void graf.offsetWidth;

  // Tilføj 'rotating'-klassen for at starte rotationsanimationen
  graf.classList.add("rotating");

  // Toggler 'aktiv'-klassen: true hvis aktiv, false hvis ikke
  const erAktiv = graf.classList.toggle("aktiv");

  // Skift indholdet lidt efter rotationen starter (300 ms forsinkelse)
  setTimeout(() => {
    if (erAktiv) {
      // Hvis aktiv: vis billede
      graf.innerHTML = '<img src="../Steno/billeder/graf.webp" alt="graf">';
    } else {
      // Hvis ikke aktiv: vis tekst igen
      graf.innerHTML = '<h1>Klik her</h1>';
    }
  }, 300); // Tiden kan justeres, så den passer med animationens varighed.
});
