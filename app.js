
document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener("resize", fixWindow);

var canvas;
var ctx;
var scale = 0.12;

function fixWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  logo.x = Math.floor(Math.random() * canvas.width * scale);
  logo.y = Math.floor(Math.random() * canvas.height * scale);
}

