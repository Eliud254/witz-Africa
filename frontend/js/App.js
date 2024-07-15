function updateItemValue() {
  const itemValue = document.getElementById('item-value').value;
  document.getElementById('item-value-display').textContent = itemValue;
  updateDownpayment();
}

function updateDownpayment() {
  const itemValue = document.getElementById('item-value').value;
  const downpaymentPercent = document.getElementById('downpayment').value;
  const downpayment = (itemValue * downpaymentPercent) / 100;
  document.getElementById('downpayment-display').textContent = downpayment.toFixed(0);
  document.getElementById('downpayment-percent').textContent = downpaymentPercent;
}

function updateLoanTerm() {
  const loanTerm = document.getElementById('loan-term').value;
  document.getElementById('loan-term-display').textContent = loanTerm;
}

function calculateLoan() {
  const itemValue = parseFloat(document.getElementById('item-value').value);
  const downpaymentPercent = parseFloat(document.getElementById('downpayment').value);
  const loanTerm = parseInt(document.getElementById('loan-term').value);
  
  const downpayment = (itemValue * downpaymentPercent) / 100;
  const loanAmount = itemValue - downpayment;
  const interestRate = 0.1;
  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = loanTerm;

  const monthlyRepayment = loanAmount * monthlyInterestRate / (1 - (Math.pow(1/(1 + monthlyInterestRate), numberOfPayments)));
  
  document.getElementById('monthly-repayment').textContent = monthlyRepayment.toFixed(2);
}

updateItemValue();
updateLoanTerm();
