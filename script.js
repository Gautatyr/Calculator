//Addition
function add(a,b){
    return (+a) + (+b);
}

//Substraction
function substract(a,b){
    return a - b;
}

//division
function divide(a,b){
    if(a === 0 || b === 0){
        return "ERROR: You can't divide by 0"
    }
    return a / b;
}


//Multiplication
function multiply(a,b){
    return a * b;
}

//Make the operation
function operate(operator,a,b){
    if(operator === "+"){
        return add(a,b);
    }else if(operator === "-"){
        return substract(a,b);
    }else if (operator === "/"){
        return divide(a,b);
    }else if (operator === "*"){
        return multiply(a,b);
    }
}

const NUMBERSBUTTONS = document.querySelectorAll(".number");
const DISPLAY = document.querySelector(".display");


NUMBERSBUTTONS.forEach(button => {
    button.addEventListener("click", function(){
        if(isContinuous == false){
        setDisplay(getDisplay() + button.textContent); 
        }else{
            setDisplay("");
            setDisplay(button.textContent);
            isContinuous = false;
        }
    })
});


let operator ="";
let firstNumber = "";
let secondNumber = "";
let isContinuous = false; 

const OPERATORSBUTTONS = document.querySelectorAll(".operator");
OPERATORSBUTTONS.forEach(button =>{
    button.addEventListener("click", function(){
        if(operator === ""){
            operator = button.textContent;
            firstNumber = getDisplay();
            //setDisplay("");
            isContinuous = true;
        }else{
            secondNumber = getDisplay();
            let result = operate(operator,firstNumber,secondNumber);
            operator = button.textContent;
            setDisplay(result);
            firstNumber = result;
            secondNumber = "";
            isContinuous = true;
        }
    })
})


const EQUALSBUTTON = document.querySelector(".equals");
EQUALSBUTTON.addEventListener("click", function(){
    secondNumber = getDisplay();
    setDisplay(operate(operator,firstNumber,secondNumber));
    operator = "";
    isContinuous = true;
})

const CLEARBUTTON = document.querySelector(".clear");
CLEARBUTTON.addEventListener("click", function(){
    setDisplay("");
    operator ="";
    firstNumber="";
    secondNumber="";
})


//return the display text content
const getDisplay = function(){
    return DISPLAY.textContent;
}

//set display text content
const setDisplay = function(arg){
    DISPLAY.textContent = arg;
}



