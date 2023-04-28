`use strict;`;

window.onload = init;

function init() {
  console.log(`Hello World`);
  const calculateBtnEl = document.getElementById(`calculate`);
  calculateBtnEl.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked() {
  console.log(`clicked`);
  const loanEl = document.getElementById(`loanAmount`);
  console.log(loanEl.value);
  const interestEl = document.getElementById(`interestRate`);
  console.log(interestEl.value);
  const termEl = document.getElementById(`loanTerm`);
  console.log(termEl.value);

  //math tbd

  const monthlyPayment = 500;
  const totalCost = 500000;
  const monthlyPaymentEl = document.getElementById(`monthlyPayment`);
const totalCostEl = document.getElementById(`totalcost`);

  monthlyPaymentEl.innerHTML = monthlyPayment;
  totalCostEl.innerHTML = totalCost;
}
