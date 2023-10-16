'use strict'

const firstNameCont = document.getElementById('user-first-name');
const lastNameCont = document.getElementById('user-last-name');

const userFirstName = document.getElementById('first-name');
const userLastName = document.getElementById('last-name');
const userEmail = document.getElementById('email').value;
const userPhone = document.getElementById('phone-number').value;
const userPassword = document.getElementById('password').value;
const userConfPassword = document.getElementById('confirm-password').value;

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

const checkmarkName = document.getElementById('valid-checkmark');

checkmarkName.style.display = 'none'; //validity checkmark is hidden by default

const validateFirstName = function () {
        if (userFirstName.value.length === 0) {
            console.log(userFirstName.value);
            firstNameError.innerHTML = 'First first name is required';
            checkmarkName.style.display = 'none';
            return false;
        } else if(!userFirstName.value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {
            firstNameError.innerHTML = 'Input valid name please';
            checkmarkName.style.display = 'none';
            return false;
        } else {
            checkmarkName.style.display = 'block';
            firstNameError.innerHTML = '';
            return true; 
        }
}

const validateLastName = function () {
         if (userLastName.value.length === 0) {
             console.log(userLastName.value);
             lastNameError.innerHTML = 'Last name is required';
             return false;
         } else if(!userLastName.value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {
             lastNameError.innerHTML = 'Input valid last name please';
             return false;
         } else {
             lastNameError.innerHTML = 'valid';
             return true; 
         }
 }