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
    if(a === "0" || b === "0"){
        alert("dividing by 0? Interesting... We don't do that here.");
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
            buttonDot.disabled = false;
        }else{
            secondNumber = getDisplay();
            let result = operate(operator,firstNumber,secondNumber);
            result = round(result);
            operator = button.textContent;
            setDisplay(result);
            firstNumber = result;
            secondNumber = "";
            isContinuous = true;
            buttonDot.disabled = false;
        }
    })
})


const EQUALSBUTTON = document.querySelector(".equals");
EQUALSBUTTON.addEventListener("click", function(){
    secondNumber = getDisplay();
    let result = operate(operator,firstNumber,secondNumber);
    result = round(result);
    setDisplay(result);
    operator = "";
    isContinuous = true;
    buttonDot.disabled = false;
})

const CLEARBUTTON = document.querySelector(".clear");
CLEARBUTTON.addEventListener("click", function(){
    setDisplay("");
    operator ="";
    firstNumber="";
    secondNumber="";
    buttonDot.disabled = false;
})


//return the display text content
const getDisplay = function(){
    return DISPLAY.textContent;
}

//set display text content
const setDisplay = function(arg){
    DISPLAY.textContent = arg;
}

//Rounds the number depending on the decimals
//If num has no more than 2 decimals it returns num unchanged
//If num has more than 2 decimals it rounds it to 2 decimals
const round = function(num){
    if((num * 100) % 1 === 0){
        return num;
    }else{
        return (Math.round(num*100))/100;
    }
}

const buttonDot = document.querySelector(".dot");
buttonDot.addEventListener("click",function(){buttonDot.disabled = true;})