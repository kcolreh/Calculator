const display = document.querySelector('#display')
const display2 = document.querySelector('#display-2')
const buttons = document.querySelectorAll('.btn');
const buttonsOperators = document.querySelectorAll('.operator')
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');

let firstNumber = '';
let secondNumber = '';




//Gets imput from numbers and display them on the screen.
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '' && secondNumber != '') {
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('+')) {
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('-')) {
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('x')) {
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else if (display2.textContent.includes('/')) {
            const number = button.value;
            display.textContent += number;
            return secondNumber = display.textContent;
        } else (button.className === 'btn'); {
            const number = button.value;
            display.textContent += number;
            firstNumber = display.textContent;
        }
    })
});

//calls for the functions to get the answer
equals.addEventListener('click', () => {
    if (display2.textContent.includes('+')) {
        addFunc(firstNumber, secondNumber)
    } else if (display2.textContent.includes('-')) {
        subtractFunc(firstNumber, secondNumber);
    } else if (display2.textContent.includes('x')) {
        multiplyFunc(firstNumber, secondNumber);
    } else if (display2.textContent.includes('/')) {
        divideFunc(firstNumber, secondNumber);
    }
});

//Operator buttons to clear the displays and values
add.addEventListener('click', () => {
    if (typeof firstNumber === 'number' && secondNumber === '') {
        display.textContent = '';
        return display2.textContent = firstNumber + '+';
    }
    display2.textContent = firstNumber + '+';
    display.textContent = '';
});

subtract.addEventListener('click', () => {
    if (typeof firstNumber === 'number' && secondNumber === '') {
        display.textContent = '';
        return display2.textContent = firstNumber + '-';
    }
    display2.textContent = firstNumber + '-';
    display.textContent = '';
});

multiply.addEventListener('click', () => {
    if (typeof firstNumber === 'number' && secondNumber === '') {
        display.textContent = '';
        return display2.textContent = firstNumber + 'x';
    }
    display2.textContent = firstNumber + 'x';
    display.textContent = '';
});

divide.addEventListener('click', () => {
    if (typeof firstNumber === 'number' && secondNumber === '') {
        display.textContent = '';
        return display2.textContent = firstNumber + '/';
    }
    display2.textContent = firstNumber + '/';
    display.textContent = '';
});


clear.addEventListener('click', () => {
    display.textContent = '';
    display2.textContent = '';
    firstNumber = '';
    secondNumber = '';
});


//Functions to calculate the inputs
function addFunc(firstNumberAdd, secondNumberAdd) {
    let sum = (+firstNumberAdd) + (+secondNumberAdd);
    display2.textContent = '';
    display.textContent = sum;
    firstNumber = sum;
    secondNumber = '';
}

function subtractFunc(firstNumberSubctract, secondNumberSubtract) {
    const sum = (firstNumberSubctract) - (secondNumberSubtract);
    display2.textContent = '';
    display.textContent = sum;
    firstNumber = sum;
    secondNumber = '';
}

function multiplyFunc(firstNumberMultiply, secondNumberMultiply) {
    const sum = (firstNumberMultiply) * (secondNumberMultiply);
    display2.textContent = '';
    display.textContent = sum;
    firstNumber = sum;
    secondNumber = '';
}

function divideFunc(firstNumberDivide, secondNumberDivide) {
    const sum = (firstNumberDivide) / (secondNumberDivide);
    display2.textContent = '';
    display.textContent = sum;
    firstNumber = sum;
    secondNumber = '';
}


