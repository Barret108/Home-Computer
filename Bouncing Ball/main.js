// Gravity Bouncer

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let ball = {
  x: 400,
  y: 100,
  r: 20,
  xSpeed: 5,
  ySpeed: 0,
  a: 0.5,
};

let ballc = {
  x: 300,
  y: 100,
  r: 20,
  xSpeed: 5,
  ySpeed: 0,
  a: 0.5,
};

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // Update
  moveBallHz();
  moveBallVt();
  moveBallHzc();
  moveBallVtc();
  collisionCheck();

  // Draw
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  drawBall();
  drawBallc();

  // Collision Check

  function collisionCheck() {
    if (ball.x === ballc.x && ball.y === ballc.y) {
      alert(1);
      ball.xSpeed = -ball.xSpeed;
      ball.ySpeed = -ball.ySpeed;
      ballc.xSpeed = -ballc.xSpeed;
      ballc.ySpeed = -ballc.ySpeed;
    }
  }

  // Request Another Animation Frame
  requestAnimationFrame(animate);
}
