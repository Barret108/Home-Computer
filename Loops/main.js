// Repeat 500

console.log("Repeat 500");

let score = 0;

while (score < 500) {
  score++;
  console.log("I'm so happy!");
}

// Multiples of 4

console.log("Multiples of 4");

let num = 12;

while (num < 100) {
  if (num % 4 === 0) {
    console.log(num);
  }
  num++;
}
// Find Odd

console.log("Find odd");

let odd = 11;

while (odd < 56) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
  odd++;
}

// Find sum till 50

console.log("Sum till 50");

let sumNum = 5;
let numSum = 5;

while (sumNum < 51) {
  numSum += sumNum;
  if (sumNum === 50) {
    console.log(numSum);
  }
  sumNum++;
}

// Find sum till 100 jumping by 10

console.log("Sum till 100 jumping by 10");

let sumNumber = 0;
let numCheck = 0;
let numAdd = 10;

while (numCheck < 10) {
  sumNumber += numAdd;
  numAdd += 10;
  numCheck++;
  if (numCheck > 9) {
    console.log(sumNumber);
  }
}
