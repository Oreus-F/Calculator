let displayedNumber = [];
let values = [];
let action;
let result;
let chosenOperator;
let lastVariableOperand;
let noDivisionBy0 = "Maybe no one told you, but school is free you know.";


const digitBox = document.querySelector("#digitBox");
const waitingOperation = document.querySelector("#waitingOperation");
const resultDisplay = document.querySelector("#resultDisplay");

const getVariable = function(){
    console.log(`
        displayedNumber : ${displayedNumber}
        displayedNumberLength : ${displayedNumber.length}
        firstNumber : ${values[0]}
        secondNumber : ${values[1]}
        values.length : ${values.length}
        values : ${values}
        result : ${result}
        chosenOperator : ${chosenOperator}
        lastVariableOperand : ${lastVariableOperand}`);
};


const add = function(arr){
    let sum = arr.reduce((acc, value) => acc + value);
    return sum.toFixed(3);
};

const sub = function(arr){
    let sum = arr.reduce((acc, value) => acc - value);
    return sum.toFixed(3);
};

const multiply = function(arr){
    let sum = arr.reduce((acc, value) => acc * value);
    return sum.toFixed(3);
};


const divide = function(arr){
    let sum = arr.reduce((acc, value) => acc / value);
    return sum.toFixed(3);
};

const operate = function(action, arr){
    if (chosenOperator === undefined) {
        showDoingOperation();
        return result = arr[0]};
    if (action === divide && arr[1] === 0){
        values = [];
        return result = noDivisionBy0};
    result = action(arr);
    showDoingOperation();
    lastVariableOperand = arr[1];
    values = [];
    return result; 
};


const deleteLastNumber = function(str){
    array = str.split('');
    array.pop();
    return array = array.join('');
}

const changeStrIntoNumber = function(str){
    if(str.length === 0){return 0};
    return +str;
};

const clearAll = function(){
    displayedNumber = [];
    chosenOperator = undefined;
    values = [];
    showSelectedNumber();
    lastVariableOperand = undefined;
    result = undefined;
    waitingOperation.textContent = "";
};


const getFirstVariable = function(){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    let numberLength = displayedNumber.join('').length;
    //


    if (values.length === 1 && numberLength > 0) {
        values.push(number);
        operate(action, values);
        showResult();
        showSelectedNumber();
        displayedNumber = [];
    }else if (values.length === 1 && numberLength === 0) {
        getVariable();
        return;
    } else if (numberLength === 0 && result !== undefined){
        values.push(result);
    } else {
        values.push(number);
        displayedNumber = [];
    };


};

const getSecondVariable = function(){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    let numberLength = displayedNumber.join('').length;
    //

    if (values.length === 1 && numberLength === 0 && lastVariableOperand !== undefined) {
        values.push(lastVariableOperand);
    } else if (values.length === 0 && numberLength > 0 ) {
        getFirstVariable();
        if (lastVariableOperand !== undefined) {
            getSecondVariable();
        };
    } else if (values.length === 0 && result !== undefined) {
        values[0] = result;
        getSecondVariable();
    } else if (values.length === 1 && numberLength === 0 && chosenOperator !== undefined) {
        values.push(values[0]);
    } else if (values.length === 1 && chosenOperator === undefined) {
        if (numberLength > 0) {
            values[0] = number;
        } else {return};
    } else {
        values.push(number);
        displayedNumber = [];
    };
};


const showWaitingOperation = function(){
    if (values[0] === undefined && result !== undefined) {
        waitingOperation.textContent = `${result} ${chosenOperator}`;
    } else { 
        waitingOperation.textContent = `${values[0]} ${chosenOperator}`;
    };
};

const showDoingOperation = function(){
    if(chosenOperator === undefined){
        waitingOperation.textContent = `${values[0]} =`
    } else if (result === noDivisionBy0){
        waitingOperation.textContent = `${values[0]} ${chosenOperator}`
    } else {
        waitingOperation.textContent = `${values[0]} ${chosenOperator} ${values[1]} =`
    };
};

const showResult = function(){
    displayedNumber = String(result).split('');
}

const showSelectedNumber = function(){
    if (displayedNumber.includes(".", displayedNumber.length - 1)) {return resultDisplay.textContent = displayedNumber.join('')}
    if (result === noDivisionBy0){return resultDisplay.textContent = result;}
    resultDisplay.textContent = changeStrIntoNumber(displayedNumber.join(''));
}



digitBox.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        

        case "clear":
            clearAll();
            
            break;


        case "del":
            displayedNumber.pop();
            showSelectedNumber();
            
            break;
                    

        case "1":
            displayedNumber.push(1);
            showSelectedNumber();
            
            break;

    
        case "2": 
            displayedNumber.push(2);
            showSelectedNumber();
            
            break;

    
        case "3": 
            displayedNumber.push(3);
            showSelectedNumber();
            
            break;
        
    
        case "4":
            displayedNumber.push(4);
            showSelectedNumber();
            
            break;

        
        case "5": 
            displayedNumber.push(5);
            showSelectedNumber();
            
            break;
        
    
        case "6":
            displayedNumber.push(6);
            showSelectedNumber();
            
            break;
            
        
        case "7": 
            displayedNumber.push(7);
            showSelectedNumber();
            
            break;
         
            
        case "8":
            displayedNumber.push(8);
            showSelectedNumber();
            
            break;
            
        
        case "9":
            displayedNumber.push(9);
            showSelectedNumber();
            
            break;

        
        case "0":
            displayedNumber.push(0);
            showSelectedNumber();
            
            break;

        case "comma":
            if (displayedNumber.includes(".")) {break};
            if (displayedNumber.length === 0) {displayedNumber.push(0)};
            displayedNumber.push(".");
            showSelectedNumber();
            
            break;


        case "division":
            lastVariableOperand = undefined;
            getFirstVariable();
            chosenOperator = "/";
            action = divide;
            showWaitingOperation();
            
            break;

        case "multiplication":
            lastVariableOperand = undefined;
            getFirstVariable();
            chosenOperator = "*";
            action = multiply;
            showWaitingOperation();
            
            break;

        case "substraction":
            lastVariableOperand = undefined;
            getFirstVariable();
            chosenOperator = "-";
            action = sub;
            showWaitingOperation();
            
            break;

        case "addition":
            lastVariableOperand = undefined;
            getFirstVariable();
            chosenOperator = "+";
            action = add;
            showWaitingOperation();
            
            break;

        case "equal":

            getSecondVariable();
            getVariable();
            operate(action, values);
            showResult();
            showSelectedNumber();
            displayedNumber = [];
            
            break;

        // click equal devrait actualiser l'opé ,même sans chiffre
        
    }
});

showSelectedNumber();