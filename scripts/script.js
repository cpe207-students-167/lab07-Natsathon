const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function toggleError(input, isValid) {
  const small = input.nextElementSibling;
  if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    small.style.visibility = 'hidden';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    small.style.visibility = 'visible';
  }
}

function validateFirstName() {
  const value = firstNameInput.value.trim();
  const isValid = /^[A-Za-z]+$/.test(value);
  toggleError(firstNameInput, value.length > 0 && isValid);
  return value.length > 0 && isValid;
}

function validateLastName() {
  const value = lastNameInput.value.trim();
  const isValid = /^[A-Za-z]+$/.test(value);
  toggleError(lastNameInput, value.length > 0 && isValid);
  return value.length > 0 && isValid;
}

function validateEmailInput() {
  const value = emailInput.value.trim();
  const isValid = validateEmail(value);
  toggleError(emailInput, value.length > 0 && isValid);
  return value.length > 0 && isValid;
}

function validatePassword() {
  const value = passwordInput.value.trim();
  const isValid = value.length >= 6;
  toggleError(passwordInput, value.length > 0 && isValid);
  return value.length >= 6 && isValid;
}

function validateConfirmPassword() {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const isValid = confirmPasswordValue === passwordValue;
  toggleError(confirmPasswordInput, confirmPasswordValue.length > 0 && isValid);
  return confirmPasswordValue === passwordValue;
}

function resetForm() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';

  firstNameInput.classList.remove('is-invalid', 'is-valid');
  lastNameInput.classList.remove('is-invalid', 'is-valid');
  emailInput.classList.remove('is-invalid', 'is-valid');
  passwordInput.classList.remove('is-invalid', 'is-valid');
  confirmPasswordInput.classList.remove('is-invalid', 'is-valid');
}

firstNameInput.addEventListener('input', validateFirstName);
lastNameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('input', validateEmailInput);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmailInput();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    alert('Registered successfully');
    resetForm();
  } else {
    alert('Please fix the errors in the form');
  }
});

resetBtn.addEventListener('click', resetForm);
