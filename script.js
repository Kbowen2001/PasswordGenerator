//define the different sets so it knows what we want  

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/~`-=';


//tell the computer how to do what we want
function generatePassword(length, useLower, useUpper, useNumbers, useSymbols) {
