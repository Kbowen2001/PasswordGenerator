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
