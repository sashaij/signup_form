'use strict'

const firstNameCont = document.getElementById('user-first-name');
const lastNameCont = document.getElementById('user-last-name');

const userFirstName = document.getElementById('first-name');
const userLastName = document.getElementById('last-name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone-number');
const userPassword = document.getElementById('password');
const userConfPassword = document.getElementById('confirm-password');

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

const checkmarkFirstName = document.getElementById('valid-checkmark-fir-name');
const checkmarkLastName = document.getElementById('valid-checkmark-las-name');
const checkmarkEmail = document.getElementById('valid-checkmark-email');
const checkmarkPhone = document.getElementById('valid-checkmark-phone');
const checkmarkPassword = document.getElementById('valid-checkmark-password');
const checkmarkConfPassword = document.getElementById('valid-checkmark-conf-password');

checkmarkFirstName.style.display = 'none'; //validity checkmark is hidden by default
checkmarkLastName.style.display = 'none';
checkmarkPhone.style.display = 'none';
checkmarkEmail.style.display = 'none';
checkmarkPassword.style.display = 'none';
checkmarkConfPassword.style.display = 'none';checkmarkConfPassword

const validateFirstName = function () {
        if (userFirstName.value.length === 0) {
            console.log(userFirstName.value);
            firstNameError.innerHTML = 'First first name is required';
            checkmarkFirstName.style.display = 'none';
            return false;
        } else if(!userFirstName.value.match(/(^[a-zA-Z'][a-zA-Z'\s]{0,20}[a-zA-Z']$)/)) {
            firstNameError.innerHTML = 'Input valid name please';
            checkmarkFirstName.style.display = 'none';
            return false;
        } else {
            firstNameError.innerHTML = '';
            checkmarkFirstName.style.display = 'block';
            return true; 
        }
}

const validateLastName = function () {
         if (userLastName.value.length === 0) {
             console.log(userLastName.value);
             checkmarkLastName.style.display = 'none';
             lastNameError.innerHTML = 'Last name is required';
             return false;
         } else if(!userLastName.value.match(/(^[a-zA-Z'][a-zA-Z'\s]{0,20}[a-zA-Z']$)/)) {
            checkmarkLastName.style.display = 'none';
             lastNameError.innerHTML = 'Input valid last name please';
             return false;
         } else {
             lastNameError.innerHTML = '';
             checkmarkLastName.style.display = 'block';
             return true; 
         }
 }

 const validateEmail = function () {
    if (userEmail.value.length === 0) {
        console.log(userEmail.value);
        checkmarkEmail.style.display = 'none';
        emailError.innerHTML = 'Email is required';
        return false;
    } else if(!userEmail.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
       checkmarkEmail.style.display = 'none';
        emailError.innerHTML = 'Input valid email please';
        return false;
    } else {
        emailError.innerHTML = '';
        checkmarkEmail.style.display = 'block';
        return true; 
    }
}

 const validatePhone = function () {
    if (userPhone.value.length === 0) {
        console.log(userPhone.value);
        checkmarkPhone.style.display = 'none';
        phoneError.innerHTML = 'Phone number is required';
        return false;
    } else if (userPhone.value.match(/^\d[0-9]/) && userPhone.value.length < 10) {
        checkmarkPhone.style.display = 'none';
        phoneError.innerHTML = '';
        return false;
    
    }  else if(!userPhone.value.match(/^\d{10}/)) {
        checkmarkPhone.style.display = 'none';
        phoneError.innerHTML = 'Only digits alowed. Input valid phone number please.';
        /* phoneError.style.marginTop = '4.8rem'; */
        return false;
    } else if (userPhone.value.match(/^\d{10}$/)) {
        phoneError.innerHTML = '';
        checkmarkPhone.style.display = 'block';
        return true; 
    }
 }

 const validatePassword = function () {
    if (userPassword.value.length === 0) {
        console.log(userPassword.value);
        checkmarkPassword.style.display = 'none';
        passwordError.style.marginTop = '4.2rem';
        passwordError.innerHTML = 'Password is required';
        return false;
    } else if (userPassword.value.length < 8) {
        checkmarkPassword.style.display = 'none';
        /* passwordError.style.marginTop = '5rem'; */
        passwordError.innerHTML = 'Password should be at least 8 characters long.';
        return false;
    } else if (userPassword.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)){
        passwordError.innerHTML = '';
        checkmarkPassword.style.display = 'block';
        return true; 
    } else if(!userPassword.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)) {
        checkmarkPassword.style.display = 'none';
        /* passwordError.style.marginTop = '7rem';  */ //feedback message layout adjustment for larger message
        passwordError.innerHTML = 'Password should be at least 8 characters long, contain one capital letter, one number and one special character';
        return false;
    }
 }

 const confirmPassword = function () {
    if (userConfPassword.value.length === 0) {
        console.log(userConfPassword.value);
        checkmarkConfPassword.style.display = 'none';
        confirmPasswordError.innerHTML = 'Password confirmation is required';
        return false;
    } else if (userConfPassword.value === userPassword.value){
        confirmPasswordError.innerHTML = '';
        checkmarkConfPassword.style.display = 'block';
        return true; 
    } else if(!userConfPassword.value !== userPassword.value) {
        checkmarkConfPassword.style.display = 'none';
       confirmPasswordError.innerHTML = 'Passwords don\'t match';
        return false;
    }
 }