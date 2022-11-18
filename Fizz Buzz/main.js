let value = 1;

while (value <= 60) {
  if (value % 3 == 0 && value % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (value % 3 == 0) {
    console.log("Fizz");
  } else if (value % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(value);
  }

  value++;
}
