// Gemmer den aktuelle videokilde, så vi senere kan genafspille den samme video
let currentVideoSource = '';

// Afspiller en video baseret på det filnavn, der hentes via onClick knappen i HTML'en
// Videoen indlæses og afspilles derefter
function playVideo(source) {
  const video = document.getElementById('videoPlayer');
  currentVideoSource = 'video/' + source;
  video.src = currentVideoSource;
  video.load();
  video.play();
}

// Afspiller den sidst valgte video igen fra starten
function replayVideo() {
  const video = document.getElementById('videoPlayer');
  if (currentVideoSource) {
    video.src = currentVideoSource;
    video.load();
    video.play();
  }
}

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