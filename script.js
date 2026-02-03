//define the different sets so it knows what we want  

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/~`-=';


//tell the computer how to do what we want
function generatePassword(length, useLower, useUpper, useNumbers, useSymbols) {
    let availableChars = '';

if(useLower) availableChars += lowerCase;
if(useUpper) availableChars += upperCase;
if(useNumbers) availableChars += numbers;
if(useSymbols) availableChars += specialChars;

        if(availableChars.length === 0) {
            return 'type something in'; //this is an error message
        }

let password = '';
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex]; //randomizes the password
}

return password;

}


//find elements on the page 
const generateBtn = document.getElementById('generate');
const passwordResultEl = document.getElementById('password');
const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const uppercaseCheckbox = document.getElementById('uppercase');

//adding listeners (this makes functions execute when you click buttons etc)
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value, 10);
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = true;

    const newPassword = generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols);
    passwordResultEl.value = newPassword;
});