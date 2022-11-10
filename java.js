const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');


clear.addEventListener('click', () => {
    display.textContent = '';
})

buttons.forEach(button => {
    button.addEventListener('click', getButtonValue);
})




function getButtonValue() {
    display.textContent += this.value;
}

function addFunc(firstNumberAdd, secondNumberAdd) {
    const sum = (+firstNumberAdd) + (+secondNumberAdd);
    console.log(sum);
}

function subtractFunc(firstNumberSubctract, secondNumberSubtract) {
    const sum = (+firstNumberSubctract) - (+secondNumberSubtract);
    console.log(sum);
}

function multiplyFunc(firstNumberMultiply, secondNumberMultiply) {
    const sum = (+firstNumberMultiply) * (+secondNumberMultiply);
    console.log(sum);
}

function divideFunc(firstNumberDivide, secondNumberDivide) {
    const sum = (+firstNumberDivide) / (+secondNumberDivide);
    console.log(sum);
}

function operate() {
    divide(firstNumber, secondNumber);
}

/*
firstNumber = getbuttonValue
second number = getbuttonValue2

if (click === add) {
    add()
} else if (click === subtract){
    subtract()
}else if (click === multiply){
    multiply()
}else if (click === divide){
    divide()
}
*/