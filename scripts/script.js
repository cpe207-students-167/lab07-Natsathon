function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.className = 'error';
}

function showSuccess(input) {
    input.className = 'success';
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

function checkLength(input, min) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else {
        showSuccess(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input2);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (!checkRequired([firstName, lastName, email, password, confirmPassword])) {
        checkLength(password, 6);
        checkEmail(email);
        checkPasswordsMatch(password, confirmPassword);
        
        if (
            firstName.className === 'success' &&
            lastName.className === 'success' &&
            email.className === 'success' &&
            password.className === 'success' &&
            confirmPassword.className === 'success'
        ) {
            alert('Registration successful');
        }
    }
}

function resetForm() {
    const formGroups = document.querySelectorAll('.form-group input');
    formGroups.forEach(function(input) {
        input.className = '';
    });

    const smalls = document.querySelectorAll('.form-group small');
    smalls.forEach(function(small) {
        small.style.visibility = 'hidden';
    });
}
