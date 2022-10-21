var ball = document.querySelector(".ball"),
  info = document.querySelector(".info"),
  y = 1;
gravity = 1;

setInterval(function () {
  if (y > 420) gravity = -gravity;
  gravity += 1;
  y = gravity;
  ball.style.top = y + "px";
}, 0.1);
