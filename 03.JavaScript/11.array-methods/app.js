const fruits = [
  "banana",
  "apple",
  "grape",
  "mango",
  "pineapple",
  "peach",
  "chikoo",
  "watermelon",
];

fruits.splice(2, 0, "orange");

let strArr = fruits.join(" - ");

console.log(strArr);
console.log(fruits.slice(3, 5));

console.log(fruits.includes("orange"));
console.log(fruits.indexOf("grape"));

const deleteHoneWaleElementKiIndex = fruits.indexOf("peach");

fruits.splice(deleteHoneWaleElementKiIndex, 1);

console.log(fruits);

//
// this is allowed
let name1 = "shehzad";
name1 = "ayesha";

// const ko reassign nhi kr sagty
const name2 = "shehzad";
name2 = "ayesha";

let fruits2 = ["apple", "banana"];

fruits2 = 5;

console.log(typeof fruits2);

const fruits3 = ["apple", "banana"];

fruits3.push("orange");
fruits3[0] = "baryani";

fruits3 = [];

console.log(fruits);
