const display = document.querySelector('#display');
const numberClass = document.querySelector('.numbers')
const operatorClass = document.querySelector('.operators')
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
let operand1 = 0;
let operand2 = 0;
let operator = '';
noOfOperators = 0;
let operandFlag = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

document.querySelector('#clear-all').addEventListener('click', () => {
    display.value = '';
    operand1 = 0;
    operand2 = 0;
    operator = '';
    noOfOperators = 0;
});

document.querySelector('#delete').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (noOfOperators === 0) {
            operand1 = display.value;
            operator = button.id !== 'exp' ? button.textContent : '^';
            display.value += operator;
            noOfOperators++;
        }
        else {
            // debugger;
            operand2 = display.value.slice(operand1.toString().length + 1);
            operand1 = operate(operator, operand1, operand2);
            operator = button.id !== 'exp' ? button.textContent : '^';
            display.value = operator !== '=' ? operand1 + operator : operand1;
            operand2 = 0;
        }
    });
});

function operate(operator, operand1, operand2) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '×':
            return operand1 * operand2;
        case '÷':
            return operand1 / operand2;
        case '%':
            return (operand2 / 100) * operand1;
        case '=':
            return operand1;
        case '^':
            return Math.pow(operand1, operand2);
    }
}