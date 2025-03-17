1 > 0;
0 < 1;
1 >= 0;
1 >= 1;
0 <= 1;
1 <= 1;

let assignment = true;
let attendance = true;

if (assignment == false) {
  console.log("GO HOME 1 !");
} else if (attendance == false) {
  console.log("GO HOME 2 !");
} else {
  console.log("allowed to sit in class");
}

// OR operator (ya)
if (assignment == true && attendance == true) {
  console.log("allowed to sit in class");
}
// koi ak bhi side true tw true
let test1 = true || true || true;
console.log(test1);

let food = false;
let tea = false;
let drink = true;

if (food || tea || drink) {
  console.log("le aao");
} else {
  console.log("ghar jao");
}

// sab side true tw true
// AND Operator
let test2 = false && true && false;
console.log(test2);

let isEnroll = true;
let passed = true;
let age = 26;

if (isEnroll && passed && age > 18) {
  console.log("Pharai karo class ma");
} else {
  console.log("ghar jao");
}

//

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(false || false || true || false);

// AND Operator = koi ak bhi false tw false

console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log(false && false && true && false);
//

let x = 5;
let y = 6;

console.log(!(x === y));
console.log(x === 5 || y === 5);
console.log(5 < 10 && y < 1);

// && AND aakhir truthy value return kare ga
let test22 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// Phale truthy value return kare ga
let test9 = "shehzad" || true;
let test10 = "" || null;
let test11 = "" || true;
let test12 = "shehzad" || 0 || null || true;
let test13 = null || "shehzad" || 56;
let test14 = true || "shehzad" || 56;
let test15 = false || 0 || 56;
let test16 = "hh" || null;
let test17 = "hh" || "kk";
