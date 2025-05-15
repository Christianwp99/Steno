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