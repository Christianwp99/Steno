// Tilbage til loopskærm
let inactivityTime = function () {
    let time;
    let timeoutInSeconds = 30;

    // Funktion der omdirigerer til index.html
    function redirectToLoopScreen() {
      window.location.href = "index.html";
    }

    // Nulstil timeren ved interaktion
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(redirectToLoopScreen, timeoutInSeconds * 1000);
    }

    // Lyt efter brugerinteraktion
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
  };

  inactivityTime(); // Kør funktionen