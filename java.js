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
         (button.className === 'btn'); {
            const number = button.value;
            display.textContent += number;
            firstNumber = display.textContent;
            console.log('this is first' + firstNumber);
            console.log('this is second' + secondNumber);
        }
    })
});

//Gets operators involved as well as gets input for the second number
buttonsOperators.forEach(button => {
    button.addEventListener('click', () => {
         (button.class === 'operator'); {
            secondNumber += firstNumber;
            display2.textContent = secondNumber;
            console.log('this is first second operator' + firstNumber);
            console.log('this is second second operator' + secondNumber);
         }
    });
});

//calls for the functions to get the answer
equals.addEventListener('click', () => {
   if (display2.textContent.includes ('+')){
    addFunc(firstNumber, secondNumber)
   } else if (display2.textContent.includes ('-')){
    subtractFunc(firstNumber, secondNumber);   
   }else if (display2.textContent.includes ('x')){
    multiplyFunc(firstNumber, secondNumber);
   }else if (display2.textContent.includes ('/')){
    divideFunc(firstNumber, secondNumber);
   }
});

//Operator buttons to clear the displays and values
add.addEventListener('click', () => {
    display2.textContent = firstNumber + '+';
    display.textContent = '';
});

subtract.addEventListener('click', () => {
    display2.textContent = firstNumber + '-';
    display.textContent = ''; 
});

multiply.addEventListener('click', () => {
    display2.textContent = firstNumber + 'x';
    display.textContent = '';
});

divide.addEventListener('click', () => {
    display2.textContent = firstNumber + ' /';
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
    const sum = (+firstNumberAdd) + (+secondNumberAdd);
    display2.textContent = '';
    display.textContent = sum;
}

function subtractFunc(firstNumberSubctract, secondNumberSubtract) {
    const sum = (firstNumberSubctract) - (secondNumberSubtract);
    display2.textContent = '';
    display.textContent = sum;
}

function multiplyFunc(firstNumberMultiply, secondNumberMultiply) {
    const sum = (firstNumberMultiply) * (secondNumberMultiply);
    display2.textContent = '';
    display.textContent = sum;
}

function divideFunc(firstNumberDivide, secondNumberDivide) {
    const sum = (firstNumberDivide) / (secondNumberDivide);
    display2.textContent = '';
    display.textContent = sum;
}


