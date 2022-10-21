// Ride Height Check
function heightCheck() {
  let height = prompt("What is your height in cm?:");

  if (height > 81) {
    alert("All Aboard!");
  } else {
    alert("Too short for ride.");
  }
}

// Positive, Negative Or Zero
function numberCheck() {
  let number = prompt("What is your number?:");

  if (number > 0) {
    alert("positive");
  } else if (number < 0) {
    alert("negative");
  } else {
    alert("zero");
  }
}

// Recommended Course
function courseRecommend() {
  let grade = prompt("What is your grade?:");

  if (grade > 94) {
    alert("You will do well at the next level.");
  } else if (grade > 81 && grade < 94) {
    alert("You should do well at the next level");
  } else if (grade > 49 && grade < 81) {
    alert("The next level may be difficult for you.");
  } else {
    alert("You may not go to the next level");
  }
}

/* ALTERNATIVE TO BELOW
function abs() {
  const number = +prompt("What is your number:");
  if (number < 0) alert(-number);
  else alert(number);
} 
*/

// Only Positive Numbers
function absoluteValue() {
  let numeroOne = prompt("What is your number?:").replace(/-/, "");
  alert(numeroOne);
}

// Even Number Check
function evenCheck() {
  let evenNum = prompt("Input Number:");

  if (evenNum % 2 == 0) {
    alert(true);
  } else {
    alert(false);
  }
}

// Divisible Check
function divisionCheck() {
  let dividNum = prompt("Input Dividend:");
  let divisNum = prompt("Input Divisor:");

  if (dividNum % divisNum == 0) {
    alert(true);
  } else {
    alert(false);
  }
}

// Point Location
function pointLocation() {
  let valueX = prompt("Input x coordinate");
  let valueY = prompt("Input y coordinate");

  if (valueX == 0 && valueY == 0) {
    alert("origin");
  } else if (valueX != 0 && valueY == 0) {
    alert("x axis");
  } else if (valueX == 0 && valueY != 0) {
    alert("y axis");
  } else if (valueX > 0 && valueY > 0) {
    alert("quadrant I");
  } else if (valueX < 0 && valueY > 0) {
    alert("quadrant II");
  } else if (valueX < 0 && valueY < 0) {
    alert("quadrant III");
  } else if (valueX > 0 && valueY < 0) {
    alert("quadrant IV");
  }
}

// Ordinal (1*st*, 2*nd*)
function ordinalAdject() {
  let ordNum = prompt("Enter your number:");

  if (ordNum == 1) {
    alert("1st");
  } else if (ordNum == 2) {
    alert("2nd");
  } else if (ordNum == 3) {
    alert("3rd");
  } else if (ordNum < 0 || ordNum > 9) {
    alert("Enter a valid number between 1-9");
  } else {
    alert(ordNum + "th");
  }
}

// Minimum Payment
function minPayment() {
  let balance = prompt("Enter your credit card balance:");
  let balance2 = (balance * 2.1) / 100;
  if (balance < 10) {
    alert("You owe " + balance + "$");
  } else if (balance2 > 10) {
    alert(`You owe ` + balance2 + " dollars");
  } else {
    alert("You owe 10 dollars");
  }
}
