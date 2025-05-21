// === PARALLAX-SCROLL ===

// Initialiserer offset-værdierne for de tre baggrundslag (himmel, træ og busk)
let offset = {
  himmel: 0,
  træ: 0,
  busk: 0
};

// Definerer scrollhastighed for hvert lag – lavere værdi = langsommere bevægelse (parallaxeffekt)
const speed = {
  himmel: 0.2,
  træ: 0.4,
  busk: 1
};

// Gemmer tidspunktet for sidste animation for at styre tempoet
let lastTime = 0;

// Delay i millisekunder mellem hver animation
const delay = 16;

// Funktion der håndterer animationen af baggrunden og vejen
function animateScroll(timestamp) {
  // Tjekker om der er gået nok tid siden sidste opdatering
  if (timestamp - lastTime >= delay) {

    // Loop gennem alle lag i offset-objektet (himmel, træ, busk)
    for (let lag in offset) {
      // Trækker hastigheden fra offset for at rykke laget til venstre
      offset[lag] -= speed[lag];

      // Finder DOM-elementet med den tilsvarende klasse (f.eks. .himmel)
      const element = document.querySelector(`.${lag}`);

      // Henter bredden på elementet
      const width = element.offsetWidth;

      // Hvis laget er scrollet hele vejen ud til venstre, nulstil offset
      if (offset[lag] <= -width) {
        offset[lag] = 0;
      }

      // Flytter laget til venstre med CSS transform
      element.style.transform = `translateX(${offset[lag]}px)`;
    }


    // === VEJ-SCROLL ===

    // Trækker vejens hastighed fra dens offset for at få den til at bevæge sig
    vejOffset -= vejSpeed;

    // Loop gennem alle vej-billeder og flytter dem i forhold til offset og skærmbredde
    vejBilleder.forEach((img, i) => {
      img.style.transform = `translateX(${vejOffset + i * window.innerWidth}px)`;
    });

    // Når vejen er scrollet én hel skærmbredde ud, nulstilles offset for at loope
    if (vejOffset <= -window.innerWidth) {
      vejOffset = 0;
    }

    // Opdaterer sidste animationstidspunkt
    lastTime = timestamp;
  }

  // Beder browseren kalde animateScroll igen ved næste frame
  requestAnimationFrame(animateScroll);
}


// === INITIALISERING AF VEJ ===

// Starter offset for vejen ved 0
let vejOffset = 0;

// Sætter scrollhastigheden for vejen
const vejSpeed = 1;

// Henter alle DOM-elementer med klassen "vej" (typisk to billeder, der looper)
const vejBilleder = document.querySelectorAll(".vej");

// Starter selve scroll-animationen
requestAnimationFrame(animateScroll);


// === BIL-ANIMATION ===

// Starter vinkel (angle) for sinusbevægelse på 0
let angle = 0;

// Funktion der får bilen til at "vugge" frem og tilbage vha. sinusfunktion
function animateBil() {
  // Øger vinklen lidt for hver frame (styrer sinusbevægelsen)
  angle += 0.01;

  // Finder DOM-elementet med klassen "bil"
  const bil = document.querySelector(".bil");

  // Flytter bilen horisontalt frem og tilbage i en bølgebevægelse
  bil.style.transform = `translate(-50%, 0) translateX(${Math.sin(angle) * 30}px)`;

  // Kalder funktionen igen ved næste animation frame
  requestAnimationFrame(animateBil);
}

// Starter bilens animation
animateBil();


// === NAVIGATION VED KLIK ===

// Tilføjer en event listener til hele pauseskærmen
document.getElementById("pauseskærm").addEventListener("click", function () {
  // Ved klik navigeres der til siden "forside.html"
  window.location.href = "forside.html";
});