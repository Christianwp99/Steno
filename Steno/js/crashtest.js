let currentVideoSource = '';

function playVideo(source) {
  const video = document.getElementById('videoPlayer');
  currentVideoSource = 'video/' + source; // Gem stien til aktuel video
  video.src = currentVideoSource;
  video.load();
  video.play();
}

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
    let timeoutInSeconds = 30; // Skift dette til det antal sekunder, du ønsker

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
    document.ontouchstart = resetTimer; // For touch-skærme
    document.onclick = resetTimer;
  };

  inactivityTime(); // Kør funktionen