document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', () => {
      container.classList.toggle('flipped');
    });
  });

  document.getElementById("graf").addEventListener("click", function () {
    const graf = this;
  
    // Fjern tidligere rotation hvis den er færdig
    graf.classList.remove("rotating");
    void graf.offsetWidth; // force reflow
    graf.classList.add("rotating");
  
    // Toggler "aktiv"-tilstand og opdaterer indholdet
    const erAktiv = graf.classList.toggle("aktiv");
  
    // Skift indhold lidt efter rotation starter
    setTimeout(() => {
      if (erAktiv) {
        graf.innerHTML = '<img src="../Steno/billeder/graf.webp" alt="graf">';
      } else {
        graf.innerHTML = '<h1>Klik her</h1>';
      }
    }, 300); // Tilpas forsinkelsen så det passer med animation
  });
  