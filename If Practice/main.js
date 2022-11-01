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

function dividendor() {
  // Input
  let dividend = +prompt("Enter a dividend:");
  let divisor = +prompt("Enter a divisor:");

  // Process
  let remainder = dividend % divisor;

  // Output
  alert(`${dividend} divided by ${divisor} gives a remainder of ${remainder}.`);
}

function madLib() {
  // Input
  let madOne = prompt("Enter a color:");
  let madTwo = prompt("Enter a friend's name:");

  // Process

  // Output
  alert(`My friend ${madTwo} likes ${madOne} bananas`);
}

function madLibTwo() {
  // Input
  let madeOne = prompt("Enter a school subject:");
  let madeTwo = prompt("Enter a color:");
  let madeThree = prompt("Enter a noun");

  // Process

  // Output
  alert(
    `In ${madeOne} class, our teacher was wearing a ${madeTwo} ${madeThree}.`
  );
}

function toCelsius() {
  // Input
  let fahr = prompt("Enter temperature in degrees Fahrenheit:");

  // Process
  cel = ((fahr - 32) * 5) / 9;

  // Output
  alert(`${fahr} degrees Fahrenheit is ${cel} degrees Celsius.`);
}

function billAndTip() {
  // Input
  let bill = prompt("Enter Bill");
  let tip = prompt("Enter tip %");

  // Process
  let total = +bill / +tip + +bill;

  // Output
  alert(`$${bill} plus a tip of $${tip} = ${total}`);
}

function pointCalc() {
  // Input
  let x1 = prompt("Enter the x value of the first point:");
  let y1 = prompt("Enter the y value of the first point:");
  let x2 = prompt("Enter the x value of the second point:");
  let y2 = prompt("Enter the y value of the second point:");

  // Process
  let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  // Output
  alert(`Distance between the two points is ${dist}`);
}

function triCalc() {
  // Input
  let a = prompt("Enter side-a of a triangle:");
  let b = prompt("Enter side-b of a triangle:");
  let c = prompt("Enter side-c of a triangle:");

  // Process
  let s = (+a + +b + +c) / 2;

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Output
  alert(` The area of the triangle is ${area}`);
}

function investmentRate() {
  // Input
  let start = prompt("Enter original investment amount:");
  let inter = prompt("Enter interest rate (as a decimanl):");
  let time = prompt("Enter number of years of investment:");

  // Process
  let amount = +start * (1 + inter) ** time;
}
