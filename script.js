let number1;
let number2;
let operator;


const add = function(a, b){
    return a + b;
};

const sub = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const operate = function(action, firstNumber, secondNumber){
    return action(firstNumber, secondNumber);
};