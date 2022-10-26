var back = Math.random() * 6;

if (back < 1) {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img1.png')";
} else if (back < 2) {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img2.png')";
} else if (back < 3) {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img3.png')";
} else if (back < 4) {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img4.png')";
} else if (back < 5) {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img5.png')";
} else {
  document.getElementById("landing").style.backgroundImage =
    "url('images/img6.png')";
}
