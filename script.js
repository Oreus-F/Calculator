let number1;
let number2;
let operator;
let displayedNumber = [2, 1];

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

resultDisplay.textContent = displayedNumber.join(",");

digitBox.addEventListener("click", (e) => {
    let target = e.target;


    switch(target.id){
        

        case"clear":
            
            break;


        case"del":
            break;
                    

        case "1":

            break;

    
        case "2":
            break;

    
        case "3":
            break;
        
    
        case "4":
            break;

        
        case "5":
            break;
        
    
        case "6":
            break;
            
        
        case "7":
            break;
         
            
        case "8":
          break;
            
        
        case "9":
            break;

        
        case "0":
            break;
    }
})