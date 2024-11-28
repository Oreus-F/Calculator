let number1;
let number2;
let operator;
let displayedNumber = "";


const digitBox = document.querySelector("#digitBox");
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

const changeNumbersDisplayed = function(){
    let str = displayedNumber.join("");
    resultDisplay.textContent = str;
};

digitBox.addEventListener("click", (e) => {
    let target = e.target;


    switch(target.id){
        

        case "clear":
            displayedNumber = "";
            resultDisplay.textContent = displayedNumber;
            break;


        case "del":

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
    }
});

resultDisplay.textContent = displayedNumber;