
function add (firstNumberAdd, secondNumberAdd){
    const sum = (+firstNumberAdd) + (+secondNumberAdd);
    console.log(sum);
}

function subtract (firstNumberSubctract, secondNumberSubtract){
    const sum = (+firstNumberSubctract) - (+secondNumberSubtract);
    console.log(sum);
}

function multiply (firstNumberMultiply, secondNumberMultiply){
    const sum = (+firstNumberMultiply) * (+secondNumberMultiply);
    console.log(sum);
}

function divide (firstNumberDivide, secondNumberDivide){   
    const sum = (+firstNumberDivide) / (+secondNumberDivide);
    console.log(sum);
}

function operate(){
    firstNumber = prompt('Pick a number');
    secondNumber = prompt('pick another number');
    divide(firstNumber, secondNumber);
}
