// Welcome to JavaScript Code Pad
// Runs on the embedded node.js


// code no 16

  Letter = ("A");
  if (Letter >= "A" && Letter <= "Z") {
    console.log("Upper case letter");
  } else {
  console.log("Lower case letter");
}



// code no 17

  Age = 25;
  HasLicense = "True";
  if (Age >= 18) {
    console.log("Can Drive");
  } else {
  console.log("Cannot Drive");
}



// code no 18

 num1 = 15;
 num2 = 8;
Sum = num1 + num2;
Product = num1 * num2;
Quotient = num1 / num2;
Difference = num1 - num2;

console.log(Sum);
console.log(Product);
console.log(Quotient);
console.log(Difference);



// code no 19

  var n = 15;
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      console.log(i+ "divisible by 3");
    } else {
    console.log(i);
  }
}



// code no 20

  var hour = 14;
  // using 24 hours format
  if (hour >= 5 && hour <= 11) {
    console.log("good morning");
  } else if (hour >= 12 && hour <= 17) {
  console.log("good afternoon");
} else if (hour >= 18 && hour <= 21) {
console.log("good evening");
} else if (hour >= 22 && hour <= 24) {
console.log("good night");
}