// Gemmer den aktuelle videokilde, så vi senere kan genafspille den samme video
let currentVideoSource = '';

// Afspiller en video baseret på det filnavn, der hentes via onClick-knappen i HTML'en
// Videoen indlæses og afspilles derefter
function playVideo(source) {
  // Henter video-elementet fra DOM'en
  const video = document.getElementById('videoPlayer');

  // Sætter den fulde sti til videofilen (forudsætter at filerne ligger i en 'video' mappe)
  currentVideoSource = 'video/' + source;

  // Opdaterer src-attributten med den nye videokilde
  video.src = currentVideoSource;

  // Indlæser videoen (nødvendigt for at sikre korrekt start fra ny kilde)
  video.load();

  // Afspiller videoen
  video.play();
}

// Afspiller den sidst valgte video igen fra starten
function replayVideo() {
  // Henter video-elementet fra DOM'en
  const video = document.getElementById('videoPlayer');

  // Tjekker om der allerede er en videokilde gemt
  if (currentVideoSource) {
    // Sætter videokilden til den tidligere gemte sti
    video.src = currentVideoSource;

    // Indlæser videoen fra starten
    video.load();

    // Afspiller videoen
    video.play();
  }
}

// Tilbage til loopskærm
let inactivityTime = function () {
    let time;
    let timeoutInSeconds = 60; //hvor lang tid der går indtil den går tilbage til loopskærmen 

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