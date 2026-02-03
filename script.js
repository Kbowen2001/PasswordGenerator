//define the different sets so it knows what we want  

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/~`-=';

//tell the computer how to do what we want
function generatePass() {
    // get length from input
    const length = parseInt(document.querySelector('#length').value, 10);

    // get checked values
    const useUppercase = document.querySelector('#uppercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;
    const useLowercase = true;

    // empty password + charset
    let password = '';
    let charSet = '';

    // always include lowercase
    if (useLowercase) charSet += lowerCase;
    if (useUppercase) charSet += upperCase;
    if (useNumbers) charSet += numbers;
    if (useSymbols) charSet += specialChars;

    if (charSet.length === 0 || Number.isNaN(length) || length <= 0) {
        document.querySelector('#password').value = '';
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.querySelector('#password').value = password;
}


//find elements on the page 
const generateBtn = document.getElementById('generate');
const passwordResultEl = document.getElementById('password');
const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const uppercaseCheckbox = document.getElementById('uppercase');

//adding listeners (this makes functions execute when you click buttons etc)
generateBtn.addEventListener('click', generatePass);