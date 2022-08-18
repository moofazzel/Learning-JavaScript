// // Deposit part
// document.getElementById("btn-deposit").addEventListener("click", function () {
//   const newDepositAmount = getElementValueById("deposit-field");

//   const previousBalanceTotal = getElementById("deposit-total");
//   const currentBalanceTotal = newDepositAmount + previousBalanceTotal;

//   setTextElementValueById("deposit-total", currentBalanceTotal);

//   const NewTotalBalance = newDepositAmount + getElementById("balance-total");
//   setTextElementValueById("balance-total", NewTotalBalance);
// });

// // Withdraw part

// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   const newWithdrawAmount = getElementValueById("withdraw-field");

//   const previousWithdrawTotal = getElementById("withdraw-total");

//   const currentWithdrawBalanceTotal = newWithdrawAmount + previousWithdrawTotal;

//   setTextElementValueById("withdraw-total", currentWithdrawBalanceTotal);

//   const NewTotalBalance = getElementById("balance-total") - newWithdrawAmount;

//   setTextElementValueById("balance-total", NewTotalBalance);
// });




document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositValue = parseFloat(depositField.value);
  depositField.value = "";

  if (isNaN(depositValue)) {
    alert("Please input Number");
    return;
  }

  const depositTotal = document.getElementById("deposit-total");
  const depositCurrentTotal = parseFloat(depositTotal.innerText);

  depositTotal.innerText = depositValue + depositCurrentTotal;

  const balanceTotal = document.getElementById("balance-total");
  const currentBalanceTotal = parseFloat(balanceTotal.innerText);

  balanceTotal.innerText = currentBalanceTotal + depositValue;
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawValue = parseFloat(withdrawField.value);
  withdrawField.value = "";

  const balanceTotal = document.getElementById("balance-total");
  const currentBalanceTotal = parseFloat(balanceTotal.innerText);

  if (isNaN(withdrawValue)) {
    alert("Please input Number");
    return;
  } else if (withdrawValue > currentBalanceTotal) {
    alert("You Don't Have Enough Balance ");
    return;
  }

  balanceTotal.innerText = currentBalanceTotal - withdrawValue;

  const withdrawTotal = document.getElementById("withdraw-total");
  const currentWithdrawTotal = parseFloat(withdrawTotal.innerText);

  withdrawTotal.innerText = withdrawValue + currentWithdrawTotal;
});

