// VIDEO
var video = document.getElementById("myVideo");
var pauseBtn = document.getElementById("myPauseBtn");
var closeBtn = document.getElementById("myCloseBtn");
var switchBtn = document.getElementById("switchBtn");
var contentVideo = document.getElementById("contentVideo");

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

switchBtn.onclick = () => {
  var tema = document.getElementById("tema-estilo");
  var boton = document.getElementById("boton-tema");
  if (tema.getAttribute("href") == "claro.css") {
    tema.href = "oscuro.css";
    boton.innerHTML = "Tema claro";
  } else {
    tema.href = "claro.css";
    boton.innerHTML = "Tema oscuro";
  }
}