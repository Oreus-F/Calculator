let displayedNumber = "";
let firstNumber;
let secondNumber;
let action;
let result;
let chosenOperator;


const digitBox = document.querySelector("#digitBox");
const waitingOperation = document.querySelector("#waitingOperation");
const resultDisplay = document.querySelector("#resultDisplay");


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


const deleteLastNumber = function(str){
    array = str.split('');
    array.pop();
    return array = array.join('');
}

const changeStrIntoNumber = function(str){
    console.log(str)
    if(str.length === 0){return 0};
    return +str;
};

digitBox.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        

        case "clear":
            displayedNumber = "";
            resultDisplay.textContent = displayedNumber;
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
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;

    
        case "2":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;

    
        case "3":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;
        
    
        case "4":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;

        
        case "5":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;
        
    
        case "6":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;
            
        
        case "7":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;
         
            
        case "8":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;
            
        
        case "9":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;

        
        case "0":
            displayedNumber += target.id;
            resultDisplay.textContent = displayedNumber;
            break;

        case "comma":
            displayedNumber = displayedNumber.split('');
            if (displayedNumber.includes(".")) {
                displayedNumber = displayedNumber.join('');
                break};
            displayedNumber = displayedNumber.join('');
            displayedNumber += ".";
            resultDisplay.textContent = displayedNumber;
            break;


        case "division":
            chosenOperator = "/";
            firstNumber = changeStrIntoNumber(displayedNumber);
            waitingOperation.textContent = `${firstNumber} ${chosenOperator}`;
            action = divide;
            break;

        case "multiplication":

            break;

        case "substraction":

            break;

        case "addition":

            break;

        case "equal":
            secondNumber = 2;
            result = operate(action, firstNumber, secondNumber);
            resultDisplay.textContent = result;
            break;
        
    }
});

resultDisplay.textContent = displayedNumber;