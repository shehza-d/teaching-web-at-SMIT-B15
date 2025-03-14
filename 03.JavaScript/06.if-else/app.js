// converting string to number
let a = "32";

// a = Number(a);
// a = parseInt(a);
// a = parseFloat(a);
// a = +a;

// console.log(a);
// console.log(typeof a);

// converting number to string
let b = 56;

// b = b.toString()
b = String(b);

// console.log(b);
// console.log(typeof b);

// agar
// if (boolean) {
// }

// if (Boolean) {
// boolean true hy tw ye code chale ga
// }

let temperature = 20;

// 20 pr sardi

// if (temperature <= 20) {
//   // ye code chale ga
//   console.log("Sardi hy 🥶");
// } else {
//   console.log("Garmi hy 🌞");
// }

// numberInput1.style.color = 'red'
// ----------------
let myForm = document.querySelector("#mera-form");
let numberInput1 = document.querySelector("#num1");
let numberInput2 = document.querySelector("#num2");
let resultPara = document.querySelector("#result");




// console.log(myForm);
// console.log(numberInput1);
// console.log(numberInput2);

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // andar ka code saruf tab chale ga jab form submit hoga

  console.log("form submit hua hy");

  let num1 = Number(numberInput1.value);
  let num2 = Number(numberInput2.value);

  const sum = num1 + num2
 
  console.log(sum);

  resultPara.innerText = sum

  // event.target.reset()
});
