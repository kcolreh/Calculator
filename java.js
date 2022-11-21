const display = document.querySelector('#display');
const display2 = document.querySelector('#display-2')
const buttons = document.querySelectorAll('.btn');
const buttonsOperators = document.querySelectorAll('.operator')
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const backspace = document.getElementById('clearOne');
const dotButton = document.getElementById('dot');

add.addEventListener('click', addClick);
subtract.addEventListener('click', subtractClick);
multiply.addEventListener('click', multiplyClick);
divide.addEventListener('click', divideClick);
clear.addEventListener('click', clearAll);
backspace.addEventListener('click', deleteDigit);
equals.addEventListener('click', equalsAl);
dotButton.addEventListener('click', makeDecimals);

let firstNumber = ''; // First Variable
let secondNumber = ''; // Second Variable

//Gets input from buttons and displays it on the screen.
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length > 10) { //Limits the max length of Display 
            display.textContent = display.textContent.slice(0, 12);
        } else if (firstNumber === '' && secondNumber != '') { //For chaining after the first operation was completed
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('+')) { //For chaining with different operators
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('-')) { //For chaining with different operators
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('x')) { //For chaining with different operators
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('/')) { //For chaining with different operators
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (button.className === 'btn'); { // First display of number input
            const number = button.value;
            display.textContent += number;
            firstNumber = display.textContent;
        }
    })
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Digit8' && event.shiftKey) {
        document.getElementById('multiply').click();

    } else if (event.code === 'Minus') {
        document.getElementById('subtract').click();

    } else if (event.code === 'Slash') {
        document.getElementById('divide').click();

    } else if (event.code === 'Equal' && event.shiftKey) {
        document.getElementById('add').click();

    } else if (event.code === 'Equal' || event.code === 'Enter') {
        document.getElementById('equals').click();

    } else if (event.code === 'Period') {
        document.getElementById('dot').click();

    } else if (event.code === 'Backspace') {
        document.getElementById('clearOne').click();

    } else if (event.code === 'Delete') {
        document.getElementById('clear').click();

    } else if (event.code === 'Digit1') {
        document.getElementById('one').click();

    } else if (event.code === 'Digit2') {
        document.getElementById('two').click();

    } else if (event.code === 'Digit3') {
        document.getElementById('three').click();

    } else if (event.code === 'Digit4') {
        document.getElementById('four').click();

    } else if (event.code === 'Digit5') {
        document.getElementById('five').click();

    } else if (event.code === 'Digit6') {
        document.getElementById('six').click();

    } else if (event.code === 'Digit7') {
        document.getElementById('seven').click();

    } else if (event.code === 'Digit8') {
        document.getElementById('eight').click();

    } else if (event.code === 'Digit9') {
        document.getElementById('nine').click();

    } else if (event.code === 'Digit0') {
        document.getElementById('zero').click();
    }
})

//Puts a . between numbers to create decimals
function makeDecimals() {
    dot.value = '.';

    if (display.textContent.includes(dot.value)) { //Checks if the main display has a dot
        dot.value = ''; //stops new dot if there is one
    } else {
        dot.value = '.'; //Lets make you a new dot if theres none
    }
    display.textContent += dot.value; //display the dot with the main number and operator inputs
}

//calls for the functions to get the answer
function equalsAl() {
    if (display2.textContent.includes('+')) { //Detecs with Operator is in the string and calls the correct function
        addFunc(firstNumber, secondNumber)
    } else if (display2.textContent.includes('-')) { //Detecs with Operator is in the string and calls the correct function
        subtractFunc(firstNumber, secondNumber);
    } else if (display2.textContent.includes('x')) { //Detecs with Operator is in the string and calls the correct function
        multiplyFunc(firstNumber, secondNumber);
    } else if (display2.textContent.includes('/')) { //Detecs with Operator is in the string and calls the correct function
        divideFunc(firstNumber, secondNumber);
    }
}

//Functions to calculate the inputs
function addFunc(firstNumberAdd, secondNumberAdd) {
    let sum = (+firstNumberAdd) + (+secondNumberAdd); //Main Function
    if (sum > 999999999 || sum < -999999999) { // Displays a message if the number exceeds the calculators capabilities
        display2.textContent = '';
        display.textContent = 'Number too long'
    }
    display2.textContent = '';
    display.textContent = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    firstNumber = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    secondNumber = '';
}

function subtractFunc(firstNumberSubctract, secondNumberSubtract) {
    const sum = (firstNumberSubctract) - (secondNumberSubtract); //Main Function 
    if (sum > 999999999 || sum < -999999999) { // Displays a message if the number exceeds the calculators capabilities
        display2.textContent = '';
        return display.textContent = `It's over 9000!`;
    }
    display2.textContent = '';
    display.textContent = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    firstNumber = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    secondNumber = '';
}

function multiplyFunc(firstNumberMultiply, secondNumberMultiply) {
    const sum = (firstNumberMultiply) * (secondNumberMultiply); // Displays a message if the number exceeds the calculators capabilities
    if (sum > 999999999 || sum < -999999999) {
        display2.textContent = '';
        return display.textContent = `It's over 9000!`;
    }
    display2.textContent = '';
    display.textContent = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    firstNumber = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    secondNumber = '';
}

function divideFunc(firstNumberDivide, secondNumberDivide) {
    const sum = (firstNumberDivide) / (secondNumberDivide);
    if (firstNumberDivide === '0' || secondNumberDivide === '0') { // Displays a messaage if the user tries to divide by 0
        display.textContent = '';
        return display2.textContent = 'Dividing by 0? tsk tsk tsk :('
    } else if (sum > 999999999 || sum < -999999999) { // Displays a message if the number exceeds the calculators capabilities
        display2.textContent = '';
        return display.textContent = `It's over 9000!`;
    }
    display2.textContent = '';
    display.textContent = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    firstNumber = Math.round(sum * 1000) / 1000; // Rounds up the answer to have maximum of 3 decimals
    secondNumber = '';
}

//Clears the displays and values
function clearAll() {
    display.textContent = ''; // Clears main display
    display2.textContent = ''; // Clears secondary display
    firstNumber = ''; // Clears first variable
    secondNumber = ''; // Clears second variable
}

//Clears single character from displays
function deleteDigit() {
    let deleteOne = display.textContent;
    let deleteTwo = display2.textContent;
    if (display2.textContent === '') {
        display.textContent = deleteOne.slice(0, -1); //Deletes one character from Main Display
    } else if (display.textContent === '') {
        display2.textContent = deleteTwo.slice(0, -1); //Deletes one character from Secondary Display
    } else if (display.textContent != '' && display2.textContent != '') { // Allows for function to work if both displays have an input
        display.textContent = deleteOne.slice(0, -1);
    }
}

//Operator buttons
function divideClick() {
    if (typeof firstNumber === 'number' && secondNumber === '') { //Allows to chain multiple operations in a row
        display.textContent = '';
        return display2.textContent = firstNumber + ' /';
    } else if (display.textContent === '' && display2.textContent === '') { //Dosen't allow user to put in an operator before a number is selected
        return display.textContent = ''
    } else if (firstNumber != '' && secondNumber != '') { //Calls for an input evaluation if both numbers are selected and another operator is pressed
        equalsAl()
    }
    display2.textContent = firstNumber + ' /';
    display.textContent = '';
}

function addClick() {
    if (typeof firstNumber === 'number' && secondNumber === '') { //Allows to chain multiple operations in a row
        display.textContent = '';
        return display2.textContent = firstNumber + ' +';
    } else if (display.textContent === '' && display2.textContent === '') { //Dosen't allow user to put in an operator before a number is selected
        return display.textContent = ''
    } else if (firstNumber != '' && secondNumber != '') { //Calls for an input evaluation if both numbers are selected and another operator is pressed
        equalsAl()
    }
    display2.textContent = firstNumber + ' +';
    display.textContent = '';
}

function subtractClick() {
    if (typeof firstNumber === 'number' && secondNumber === '') { //Allows to chain multiple operations in a row
        display.textContent = '';
        return display2.textContent = firstNumber + ' -';
    } else if (display.textContent === '' && display2.textContent === '') { //Dosen't allow user to put in an operator before a number is selected
        return display.textContent = ''
    } else if (firstNumber != '' && secondNumber != '') { //Calls for an input evaluation if both numbers are selected and another operator is pressed
        equalsAl()
    }
    display2.textContent = firstNumber + ' -';
    display.textContent = '';
}

function multiplyClick() {
    if (typeof firstNumber === 'number' && secondNumber === '') { //Allows to chain multiple operations in a row
        display.textContent = '';
        return display2.textContent = firstNumber + ' x';
    } else if (display.textContent === '' && display2.textContent === '') { //Dosen't allow user to put in an operator before a number is selected
        return display.textContent = ''
    } else if (firstNumber != '' && secondNumber != '') { //Calls for an input evaluation if both numbers are selected and another operator is pressed
        equalsAl()
    }
    display2.textContent = firstNumber + ' x';
    display.textContent = '';
}


