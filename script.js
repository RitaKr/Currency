/*
function calc() {
  fetch("items.json")
    .then(res => res.json())
    .then(data => console.log(data));
}
calc();
*/
const currencyFrom = document.getElementById("currency-one");
const currencyTo = document.getElementById("currency-two");
const amountFrom = document.getElementById("amount-one");
const amountTo = document.getElementById("amount-two");
const swap = document.getElementById("swap");
currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);
amountFrom.addEventListener("input", calculate);
amountTo.addEventListener("input", calculate);
function calculate() {
  //console.log("hello");
  const currencyFromValue = currencyFrom.value;
  const currencyToValue = currencyTo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFromValue}`)
    .then(res => res.json())
    .then(data => {
      const rateValue = data.rates[currencyToValue].toFixed(2);
      rate.innerText = `1 ${currencyFromValue} = ${rateValue} ${currencyToValue}`;
      amountTo.value = (amountFrom.value * rateValue).toFixed(2);
    });
}
