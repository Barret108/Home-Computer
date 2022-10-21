// Gravity Bouncer Functions
function moveBallHzc() {
  // Move & Bounce Ballc Horizontally
  ballc.x += ballc.xSpeed;
  if (ballc.x + ballc.r > cnv.width || ballc.x - ballc.r < 0) {
    // Bounce
    ballc.xSpeed = -ballc.xSpeed;
  }
}

function moveBallVtc() {
  // Move & Bounce Ballc Vertically
  ballc.y += ballc.ySpeed;
  ballc.ySpeed += ballc.a;
  if (ballc.y + ballc.r > cnv.height) {
    ballc.ySpeed = -20;
  }
}

function drawBallc() {
  // Draw Bouncing Ballc
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(ballc.x, ballc.y, ballc.r, 0, 2 * Math.PI);
  ctx.fill();
}
