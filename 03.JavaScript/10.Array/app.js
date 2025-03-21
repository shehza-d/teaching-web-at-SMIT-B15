let age = 50;
let res = "pak";

false || (true && false);
false || false; // false

let a = 5;
let b = a++;

console.log(a); // 6
console.log(b); // 5

if (card) {
  if (attendace) {
    console.log("aajao");
  }
}

// array aur object hamesha const se banta hy
const fruits = ["banana", "apple", "zoo", "mango"];

const n = fruits.length - 1;
// getting last element
console.log(fruits[n]);

//
// aakhir se
fruits.push("pineapple", "orange"); // adds element and return new array length

fruits.pop(); // removes last element
fruits.pop(); // returns removed value

fruits.splice(3, 1); // remove pineapple

// shuru se
// not recommended
fruits.unshift("shehzad");

fruits.shift();
fruits.shift();

fruits[1] = "shehzad";

// ulta karde ga
console.log(fruits.reverse());

const nums = [3, 2, 0, 1, 100, 4, 5, 9, 6, 9];

console.log(fruits.sort()); // alphabetic sorting

console.log(nums.sort((a, b) => a - b)); // for number sorting
