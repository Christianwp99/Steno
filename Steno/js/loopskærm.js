let offset = {
  himmel: 0,
  træ: 0,
  busk: 0
};

const speed = {
  himmel: 0.1,
  træ: 0.6,
  busk: 1
};

// Animation med delay for jævnhed
let lastTime = 0;
const delay = 30; // cirka 60 FPS

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

    // Vej-håndtering (separat fra offset-objektet)
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
const vejSpeed = 2;
const vejBilleder = document.querySelectorAll(".vej");

requestAnimationFrame(animateScroll);

// Bil-vugge animation
let angle = 0;
function animateBil() {
  angle += 0.01;
  const bil = document.querySelector(".bil");
  bil.style.transform = `translate(-50%, 0) translateX(${Math.sin(angle) * 30}px)`;
  requestAnimationFrame(animateBil);
}
animateBil();

// Gå til forside.html ved klik
document.getElementById("pauseskærm").addEventListener("click", function () {
  window.location.href = "forside.html";
});