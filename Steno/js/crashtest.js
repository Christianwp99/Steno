function playVideo(source) {
  const video = document.getElementById('videoPlayer');
  video.src = 'video/' + source;
  video.load();
  video.play();
}