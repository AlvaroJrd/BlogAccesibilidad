// VIDEO
var video = document.getElementById("myVideo");
var pauseBtn = document.getElementById("myPauseBtn");
var closeBtn = document.getElementById("myCloseBtn");
var switchBtn = document.getElementById("switchBtn");
var contentVideo = document.getElementById("contentVideo");
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

pauseBtn.onclick = () => {
  if (video.paused) {
    video.play();
    pauseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    pauseBtn.innerHTML = "Play";
  }
}

closeBtn.onclick = () => {
  video.className = "ocultar";
  contentVideo.className = "ocultar";
  closeBtn.className = "ocultar";
}
