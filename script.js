'use strict'

const userFirstName = document.getElementById('first-name');
const userLastName = document.getElementById('last-name').value;
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

const validateFirstName = function () {
   /*          if(!userFirstName.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/) ) {
                firstNameError.innerHTML = 'Write valid first name please';
                //return false;
            } else if (userFirstName.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)){
                firstNameError.innerHTML = 'valid';
                //return true;
            } else if (userFirstName.length === 0) {
                firstNameError.innerHTML = 'First name is required';
                //return false;
                 }  */

        if (userFirstName.value.length === 0) {
            console.log(userFirstName.value);
            firstNameError.innerHTML = 'First name is required';
            return false;
        } else if(!userFirstName.value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {
            firstNameError.innerHTML = 'Input valid name please';
            return false;
        } else {
            firstNameError.innerHTML = 'valid';
            return true; 
        }

}