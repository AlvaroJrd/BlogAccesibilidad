// VIDEO
var video = document.getElementById("myVideo");
var pauseBtn = document.getElementById("myPauseBtn");
var closeBtn = document.getElementById("myCloseBtn");
var switchBtn = document.getElementById("switchBtn");
var contentVideo = document.getElementById("contentVideo");
var colorSwitch = document.querySelector('#switch input[type="checkbox"]');

colorSwitch.onchange = (ev) => {
  if(ev.target.checked){
      document.documentElement.setAttribute('tema', 'light');
      console.log("TemaLight")
  } else {
      document.documentElement.setAttribute('tema', 'dark');
  }
}

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

