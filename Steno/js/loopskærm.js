// Startposition for hvert lag
let offset = {
  himmel: 0,
  bjerg: 0,
  træ: 0,
  busk: 0
};

// Hastighed (jo højere tal, jo hurtigere)
const speed = {
  himmel: 0.1,
  bjerg: 0.3,
  træ: 0.6,
  busk: 1
};

function animateScroll() {
  for (let lag in offset) {
    offset[lag] -= speed[lag];
    if (offset[lag] <= -window.innerWidth) {
      offset[lag] = 0;
    }
    const element = document.querySelector(`.${lag}`);
    element.style.transform = `translateX(${offset[lag]}px)`;
  }


  requestAnimationFrame(animateScroll);
}

animateScroll();

let angle = 0;

function animateBil() {
  angle += 0.01;
  const bil = document.querySelector(".bil");
  bil.style.transform = `translate(-50%, 0) translateX(${Math.sin(angle) * 15}px)`;

  requestAnimationFrame(animateBil);
}
animateBil();

// Gå til forside.html ved klik
document.getElementById("pauseskærm").addEventListener("click", function() {
  window.location.href = "forside.html";
});