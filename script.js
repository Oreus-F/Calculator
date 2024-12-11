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
    counter = 0;
};

const deleteError = function(arr){
    if (arr.length === 2) {arr.pop();};
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
 
const storeVariable = function(id){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    let numberLength = displayedNumber.join('').length;
    if (numberLength === 90){alert("ok")};


    if (result === noDivisionBy0) {
        console.log("No Division by 0 my Lord");
        clearAll();
    }else {    
        values.push(number);
        displayedNumber = [];
    };
};
    
// que passa mijo, need to recommencer du scratch

const storeVariable2 = function(id){
    let number = changeStrIntoNumber(displayedNumber.join(''));
    let numberLength = displayedNumber.join('').length;
    //

    if(id === "addition") {console.log("OK GUYS ITS HAPPENING")}
    if (chosenOperator === undefined && values.length === 1) {
        console.log("Opérateur non choisi du coup, on garde le chiffre affiché");
        if (numberLength > 0) {
            values[0] = number;
        };
    } else if (lastVariableOperand !== undefined && numberLength === 0 && values[0] === result ){
        console.log("Pas de nouvelles valeur, on garde la même opération");
        values[1] = lastVariableOperand;
        displayedNumber = [];
    } else if (result === noDivisionBy0) {
        console.log("No Division by 0 my Lord");
        clearAll();
        values[0] = 0;
    } else if (values.length === 1 && counter === 0 && numberLength === 0 ){
        // EMPECHE le ELSE IF qui ne permet pas de cliquer plusieurs sur un opérateur 
        console.log("Première opération, pas de deuxième valeur, on copie la première");
        values[1] = values[0];
        displayedNumber = [];
    } else if (values.length > 0 && number !== values[0] && lastVariableOperand === undefined) {
        // EMPECHE SI YA DEUX VALEURS DE LES CALCULER A REVOIR L'ORDRE
        console.log("nouvelle valeur mais on réassigne l'opérateur");
        values[0] = number;
        displayedNumber = [];
    } else if (number === values[0] && lastVariableOperand === undefined) {
        console.log("Ne peux pas cliquer plusieurs fois sur l'opérateur")
        return
    } else if (number !== values[0] && lastVariableOperand !== undefined){
        console.log("Nouvelle valeur mais pas de changement d'opérateur");
        values[0] = number;
        values[1] = lastVariableOperand;
        displayedNumber = [];
    } else {
        console.log("On pousse le chiffre zeubi");
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
            storeVariable(target.id);
            operateIfTwo(values);
            chosenOperator = "/";
            action = divide;
            showWaitingOperation();
            
            break;

        case "multiplication":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable(target.id);
            operateIfTwo(values);
            chosenOperator = "*";
            action = multiply;
            showWaitingOperation();
            
            break;

        case "substraction":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable(target.id);
            operateIfTwo(values);
            chosenOperator = "-";
            action = sub;
            showWaitingOperation();
            
            break;

        case "addition":
            deleteError(values);
            lastVariableOperand = undefined;
            storeVariable(target.id);
            operateIfTwo(values);
            chosenOperator = "+";
            action = add;
            showWaitingOperation();
            
            break;

        case "equal":
            deleteError(values);
            // recommencer l'ordre de récupération des variables pour le traitement des données. Commencer simple, complexifier par la suite
            getVariable();
            storeVariable(target.id);
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