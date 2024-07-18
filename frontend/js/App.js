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

document.addEventListener('DOMContentLoaded', () => {
  const applyLoanBtn = document.getElementById('apply-loan-btn');
  const authModal = document.getElementById('auth-modal');
  const loanFormModal = document.getElementById('loan-form-modal');
  const authForm = document.getElementById('auth-form');
  const loanApplicationForm = document.getElementById('loan-application-form');
  const authCloseBtn = authModal.querySelector('.close');
  const loanFormCloseBtn = loanFormModal.querySelector('.close');

  applyLoanBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
  });

  authCloseBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  loanFormCloseBtn.addEventListener('click', () => {
    loanFormModal.style.display = 'none';
  });

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate successful sign-in/sign-up
    authModal.style.display = 'none';
    loanFormModal.style.display = 'block';
  });

  loanApplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loanApplicationForm);
    const email = document.getElementById('email').value;
    const loanType = formData.get('loan-type');
    const itemValue = formData.get('item-value');
    const downpayment = formData.get('downpayment');
    const loanTerm = formData.get('loan-term');

    // Simulate form submission and email notification
    sendEmailNotification(email, loanType, itemValue, downpayment, loanTerm);
    loanFormModal.style.display = 'none';
    alert('Loan application submitted successfully. You will receive a confirmation email shortly.');
  });

  function sendEmailNotification(email, loanType, itemValue, downpayment, loanTerm) {
    // Simulate email sending (implement actual email sending logic here)
    console.log(`Sending email to ${email}:
      Loan Type: ${loanType}
      Item Value: ${itemValue}
      Downpayment: ${downpayment}
      Loan Term: ${loanTerm}`);
  }

  window.onclick = (event) => {
    if (event.target === authModal) {
      authModal.style.display = 'none';
    }
    if (event.target === loanFormModal) {
      loanFormModal.style.display = 'none';
    }
  };
});
