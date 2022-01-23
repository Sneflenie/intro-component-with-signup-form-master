const firstName = document.getElementById('first-name');
const firstNameInput = document.getElementById('first-name-input');
const lastName = document.getElementById('last-name');
const lastNameInput = document.getElementById('last-name-input');
const email = document.getElementById('email');
const emailInput = document.getElementById('email-input');
const password = document.getElementById('password');
const passwordInput = document.getElementById('password-input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    // refresh the page
    e.preventDefault();


    // First Name

    const firstNameValue = firstNameInput.value;

    if (firstNameValue === '') {
        firstName.classList.add('error');
    } else {
        firstName.classList.remove('error');
    }

    // Last Name

    const lastNameValue = lastNameInput.value;

    if (lastNameValue === '') {
        lastName.classList.add('error');
    } else {
        lastName.classList.remove('error');
    }

    // Email

    const emailValue = emailInput.value;

    //check if it is a valid email
    if (!validateEmail(emailValue)) {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    function validateEmail(emailInput) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailInput).toLowerCase());
    };

    // Password

    const passwordValue = passwordInput.value;

    if (passwordValue === '') {
        password.classList.add('error');
    } else {
        password.classList.remove('error');
    }

});