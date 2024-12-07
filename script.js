let displayedNumber = [0];
let values = [];
let action;
let result;
let chosenOperator;


const digitBox = document.querySelector("#digitBox");
const waitingOperation = document.querySelector("#waitingOperation");
const resultDisplay = document.querySelector("#resultDisplay");

const getVariable = function(){
    console.log(`
        displayedNumber : ${displayedNumber}
        firstNumber : ${values[0]}
        secondNumber : ${values[1]}
        values : ${values}
        result : ${result}
        action : ${action}`);
};


const add = function(arr){
    return arr.reduce((acc, value) => acc + value);
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

const operate = function(action, arr){
    if (chosenOperator === undefined) {return arr[0]};
    result = action(arr);
    arr[0] = result;
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
    displayedNumber = [0];
    firstNumber = undefined;
    secondNumber = undefined;
    chosenOperator = undefined;
    showSelectedNumber();
    waitingOperation.textContent = "";
};


const storeVariable = function(){
    let number;
    if(values.length === 0){
        number = changeStrIntoNumber(displayedNumber.join(''));
        values.push(number);
        displayedNumber = [];
    } else if (values.length === 2) {
        return;
    } else if (displayedNumber.length === 0) {
        values.push(values[0]);
    } else {
        number = changeStrIntoNumber(displayedNumber.join(''));
        values.push(number);
        displayedNumber = [];
    }
};


const showWaitingOperation = function(){
    waitingOperation.textContent = `${values[0]} ${chosenOperator}`;
};

const showResultOperation = function(){
    if(chosenOperator === undefined){
        waitingOperation.textContent = `${values[0]} =`
    } else {
        waitingOperation.textContent = `${values[0]} ${chosenOperator} ${values[1]} =`
    }
}

const showSelectedNumber = function(){
    resultDisplay.textContent = changeStrIntoNumber(displayedNumber.join(''));
}



digitBox.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        

        case "clear":
            clearAll();
            
            break;


        case "del":

            /*
            displayedNumber = deleteLastNumber(displayedNumber);
            resultDisplay.textContent = displayedNumber;

            Problem is, if the operation is done, 
            the del case will get back into the previous number to work
            so it will be the last thing to do after make sure all operations works
            */
            
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
            displayedNumber.push(".");
            showSelectedNumber();
            
            break;


        case "division":
            storeVariable();
            chosenOperator = "/";
            action = divide;
            showWaitingOperation();
            
            break;

        case "multiplication":
            storeVariable();
            chosenOperator = "*";
            action = multiply;
            showWaitingOperation();
            
            break;

        case "substraction":
            storeVariable();
            chosenOperator = "-";
            action = sub;
            showWaitingOperation();
            
            break;

        case "addition":
            storeVariable();
            chosenOperator = "+";
            action = add;
            showWaitingOperation();
            
            break;

        case "equal":
            // recommencer l'ordre de récupération des variables pour le traitement des données. Commencer simple, complexifier par la suite
            getVariable();
            storeVariable();
            showResultOperation();
            operate(action, values);
            displayedNumber = String(result).split('');
            showSelectedNumber();
            getVariable();
            
            break;

        // click equal devrait actualiser l'opé ,même sans chiffre
        
    }
});

showSelectedNumber();