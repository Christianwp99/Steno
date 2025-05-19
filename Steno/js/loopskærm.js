// Startposition for hvert lag
let offset = {
  himmel: 0,
  bjerg: 0,
  træ: 0,
  busk: 0,
  vej: 0
};

// Hastighed (jo højere tal, jo hurtigere)
const speed = {
  himmel: 0.1,
  bjerg: 0.3,
  træ: 0.6,
  busk: 1,
  vej: 2
};

let lastTime = 0;
const delay = 8; // juster for hastighed

function animateScroll(timestamp) {
  if (timestamp - lastTime >= delay) {
    for (let lag in offset) {
      offset[lag] -= speed[lag];

      const element = document.querySelector(`.${lag}`);
      const width = element.offsetWidth;

      if (offset[lag] <= -width) {
        offset[lag] = 0;
      }

      element.style.transform = `translateX(${offset[lag]}px)`;
    }

    lastTime = timestamp;
  }

  requestAnimationFrame(animateScroll);
}

requestAnimationFrame(animateScroll);

let angle = 0;

function animateBil() {
  angle += 0.01;
  const bil = document.querySelector(".bil");
  bil.style.transform = `translate(-50%, 0) translateX(${Math.sin(angle) * 30}px)`;

  requestAnimationFrame(animateBil);
}
animateBil();

// Gå til forside.html ved klik
document.getElementById("pauseskærm").addEventListener("click", function() {
  window.location.href = "forside.html";
});