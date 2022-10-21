// Variables
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

let start = 0;
let format = "";
let time = 1;
let minutes = 0;
let seconds = 0;

//
function times() {
  setInterval(timer, 1000);

  // Starts Clock ASAP
  document.getElementById("inp").value = "0:01";

  // Styles
  document.getElementById("btn").style.backgroundColor = "red";
  document.getElementById("btn").innerText = "Reset";

  // End Detector
  start++;
  if (start % 2 == 0) {
    console.log(start);
    location.reload();
  }

  // Time Change
  function timer() {
    // Increments Seconds
    time++;

    // Clock Format
    if (time > 9) {
      seconds = "";
    }
    if (time > 60) {
      minutes++;
      time = 00;
      seconds = 0;
    }
    format = `${minutes}:${seconds}${time}`;

    // Updating Text
    document.getElementById("inp").value = format;
  }
}
