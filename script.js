let displayedNumber = [];
let values = [];
let action;
let result;
let chosenOperator;
let lastVariableOperand;


const digitBox = document.querySelector("#digitBox");
const waitingOperation = document.querySelector("#waitingOperation");
const resultDisplay = document.querySelector("#resultDisplay");

const getVariable = function(){
    console.log(`
        displayedNumber : ${displayedNumber}
        firstNumber : ${values[0]}
        secondNumber : ${values[1]}
        values.length : ${values.length}
        values : ${values}
        result : ${result}
        chosenOperator : ${chosenOperator}
        lastVariableOperand : ${lastVariableOperand}`);
};


const add = function(arr){
    return arr.reduce((acc, value) => acc + value);
};

const sub = function(arr){
    return arr.reduce((acc, value) => acc - value);
};

const multiply = function(arr){
    return arr.reduce((acc, value) => acc * value);
};

const divide = function(arr){
    return arr.reduce((acc, value) => acc / value);
};

const operate = function(action, arr){
    if (chosenOperator === undefined) {return result = arr[0]};
    result = action(arr);
    arr[0] = result;
    lastVariableOperand = arr[1];
    arr.pop();
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
    chosenOperator = undefined;
    values = [];
    showSelectedNumber();
    waitingOperation.textContent = "";
};


const storeVariable = function(){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    // IL FAUT REFAIRE LA CA VA PAS DU TOUT HEIN
};

// NO DIVISION BY 0 STUPID
// SELECT 


const showWaitingOperation = function(){
    waitingOperation.textContent = `${values[0]} ${chosenOperator}`;
};

const showDoingOperation = function(){
    if(chosenOperator === undefined){
        waitingOperation.textContent = `${values[0]} =`
    } else {
        waitingOperation.textContent = `${values[0]} ${chosenOperator} ${values[1]} =`
    };
};

const showResult = function(){
    displayedNumber = String(result).split('');
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
            lastVariableOperand = undefined;
            storeVariable();
            chosenOperator = "/";
            action = divide;
            showWaitingOperation();
            
            break;

        case "multiplication":
            lastVariableOperand = undefined;
            storeVariable();
            chosenOperator = "*";
            action = multiply;
            showWaitingOperation();
            
            break;

        case "substraction":
            lastVariableOperand = undefined;
            storeVariable();
            chosenOperator = "-";
            action = sub;
            showWaitingOperation();
            
            break;

        case "addition":
            lastVariableOperand = undefined;
            storeVariable();
            chosenOperator = "+";
            action = add;
            showWaitingOperation();
            
            break;

        case "equal":
            // recommencer l'ordre de récupération des variables pour le traitement des données. Commencer simple, complexifier par la suite
            getVariable();
            storeVariable();
            showDoingOperation();
            operate(action, values);
            showResult();
            showSelectedNumber();
            displayedNumber = [];
            getVariable();
            
            break;

        // click equal devrait actualiser l'opé ,même sans chiffre
        
    }
});

showSelectedNumber();