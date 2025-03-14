// numberInput1.style.color = 'red'
// ----------------
const myForm = document.querySelector("#mera-form");
const numberInput1 = document.querySelector("#num1");
const numberInput2 = document.querySelector("#num2");
const resultPara = document.querySelector("#result");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // andar ka code saruf tab chale ga jab form submit hoga

  console.log("form submit hua hy");

  let num1 = Number(numberInput1.value);
  let num2 = Number(numberInput2.value);

  const sum = num1 + num2;

  console.log(sum);

  resultPara.innerText = sum;

  // event.target.reset()
});
