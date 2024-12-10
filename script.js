let displayedNumber = [];
let values = [];
let action;
let result;
let chosenOperator;
let lastVariableOperand;
let noDivisionBy0 = "Someone fall asleep during math class ?";


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
    return arr.reduce((acc, value) => acc + value);
};

const sub = function(arr){
    return arr.reduce((acc, value) => acc - value);
};

const multiply = function(arr){
    return arr.reduce((acc, value) => acc * value);
};

// DIVISER PAR 0 - PROCHAINS DEFI 
const divide = function(arr){
    return arr.reduce((acc, value) => acc / value);
};

const operate = function(action, arr){
    if (chosenOperator === undefined) {
        showDoingOperation();
        return result = arr[0]};
    if (action === divide && arr[1] === 0){
        arr.pop();
        return result = noDivisionBy0};
    result = action(arr);
    showDoingOperation();
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
    displayedNumber = [];
    chosenOperator = undefined;
    values = [];
    showSelectedNumber();
    lastVariableOperand = undefined;
    result = undefined;
    waitingOperation.textContent = "";
};

const deleteError = function(arr){
    console.log("fonction delete activé");
    if (arr.length === 2) {
        console.log("ERROR 2 VARIABLES");
        arr.pop();
        console.log(arr.length);
        console.log(arr);
        console.log("fonction réussi");
    };

};

const operateIfTwo = function(arr){
    if (arr.length === 2 && arr[0] !== result) {
        console.log("NE DOIT LE FAIRE QUE SI ON CHANGE D'OPERATEUR  ")
        operate(action, values);
        showResult();
        showSelectedNumber();
        displayedNumber = [];
        lastVariableOperand = undefined;
    };
};

const storeVariable = function(){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    let numberLength = displayedNumber.join('').length;
    //

    
    if (chosenOperator === undefined && values.length === 1) {
        console.log("Opérateur non choisi du coup, on garde le chiffre affiché");
        if (numberLength > 0) {values[0] = number};
    } else if (lastVariableOperand !== undefined && numberLength === 0 && values[0] === result){
        console.log("Pas de nouvelles valeur, on garde la même opération")
        values[1] = lastVariableOperand;
        displayedNumber = [];
    } else if (result === noDivisionBy0) {
        clearAll();
        values[0] = 0;
    } else if (values.length === 1 && lastVariableOperand === undefined && numberLength === 0){
        console.log("Première opération, pas de deuxième valeur, on copie la première")
        values[1] = values[0];
        displayedNumber = [];
    } else if (number !== values[0] && lastVariableOperand !== undefined){
        console.log("")
        values[0] = number;
        values[1] = lastVariableOperand;
        displayedNumber = [];
    } else {
        console.log("On pousse le chiffre zeubi")
        values.push(number)
        displayedNumber = [];
    };
};

// NO DIVISION BY 0 STUPID


const showWaitingOperation = function(){
    waitingOperation.textContent = `${values[0]} ${chosenOperator}`;
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
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable();
            operateIfTwo(values);
            chosenOperator = "/";
            action = divide;
            showWaitingOperation();
            
            break;

        case "multiplication":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable();
            operateIfTwo(values);
            chosenOperator = "*";
            action = multiply;
            showWaitingOperation();
            console.log("VARIABLE FINALE")
            getVariable();
            
            break;

        case "substraction":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable();
            operateIfTwo(values);
            chosenOperator = "-";
            action = sub;
            showWaitingOperation();
            
            break;

        case "addition":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable();
            operateIfTwo(values);
            chosenOperator = "+";
            action = add;
            showWaitingOperation();
            
            break;

        case "equal":
            deleteError(values);
            // recommencer l'ordre de récupération des variables pour le traitement des données. Commencer simple, complexifier par la suite
            getVariable();
            storeVariable();
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