let price = 47;

// // reassigning
price = price - 10; // 10 rupe ka discount dena hy is line per

price = price * 0.5;

price = price + 5;
// // console.log("value:", price - 10);

console.log("value:", price);

// modules operator
console.log(10 % 3);
console.log(10 % 2);
console.log(10 % 4);
console.log(12 % 5);
console.log(12 % 8);
console.log(5 % 12);
console.log(7 % 7);
console.log(9 % 2);
console.log(24 % 9);

// bodmas

let score = 5;

score++; // increment operator
score--; // decrement operator
// same as this
score = score + 1;

score++; // 5
// 6

++score; // 6
// 6

let newScore = score++;

console.log(newScore);

// pre increment   ++a
// post increment  a++
// pre decrement   --a
// post decrement  a--

let a = 17;
let b = 35;
let c = 3;

let test;

test = (a / b) * 100;
test = test + (c / a) * 100;
test = test + b / (c * 100);

// 66.32, 90,
console.log(test);
