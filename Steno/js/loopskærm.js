let offset = {
  himmel: 0,
  træ: 0,
  busk: 0
};

// Definerer scrollhastighed for de forskellige lag
const speed = {
  himmel: 0.2,
  træ: 0.4,
  busk: 1
};

// Animation med delay
let lastTime = 0;
const delay = 16;

function animateScroll(timestamp) {
  if (timestamp - lastTime >= delay) {
    // Opdaterer positionen for hvert lag baseret på dets hastighed
    // Når et lag har scrollet hele sin bredde, nulstilles det for at skabe en uendelig loop-effekt
    for (let lag in offset) {
      offset[lag] -= speed[lag];
      const element = document.querySelector(`.${lag}`);
      const width = element.offsetWidth;
      if (offset[lag] <= -width) {
        offset[lag] = 0;
      }
      element.style.transform = `translateX(${offset[lag]}px)`;
    }

    // Håndterer animation af vejen der scrolles i fuld bredde og gentages ved kanten af skærmen
    vejOffset -= vejSpeed;
    vejBilleder.forEach((img, i) => {
      img.style.transform = `translateX(${vejOffset + i * window.innerWidth}px)`;
    });
    if (vejOffset <= -window.innerWidth) {
      vejOffset = 0;
    }

    lastTime = timestamp;
  }

  requestAnimationFrame(animateScroll);
}

// Vej-scroll setup
let vejOffset = 0;
const vejSpeed = 1;
const vejBilleder = document.querySelectorAll(".vej");

requestAnimationFrame(animateScroll);

// Bil animation der vugger frem og tilbage
let angle = 0;
function animateBil() {
  angle += 0.01;
  const bil = document.querySelector(".bil");
  bil.style.transform = `translate(-50%, 0) translateX(${Math.sin(angle) * 30}px)`;
  requestAnimationFrame(animateBil);
}
animateBil();

// Går til forside.html ved klik hvor som helst på skærmen
document.getElementById("pauseskærm").addEventListener("click", function () {
  window.location.href = "forside.html";
});