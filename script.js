const BtnResult = document.querySelector('.js-BtnResult');
const InputA = document.querySelector('.js-InputA');
const InputB = document.querySelector('.js-InputB');
const Operation = document.querySelector('.js-Select-Operation');
const output = document.querySelector('.js-output');

const OPERATIONS = {
    sum: '+',
    subtract: '-',
    division: '/',
    multiply: '*'
}

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}

function calculate(a, b, operation) {
    let result = null;
    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
            
        case OPERATIONS.subtract:
            result = subtract(a, b);
            break;

        case OPERATIONS.division:
            result = division(a, b);
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;

        default:
            break;  
    }
    return result;
};

BtnResult.addEventListener('click', function() {
    const a = Number(InputA.value);
    const b = Number(InputB.value);
    const operation = Operation.value;
    const result = calculate(a, b, operation);

    output.innerHTML = result;
});
