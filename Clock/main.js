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

  document.getElementById("btn").innerHTML = "";

  // End Detector
  start++;
  if (start % 2 == 0) {
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

/* 
<svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="94" height="94" rx="19" fill="#966464"/>
</svg>
*/
