//variables
let numOne=null;
let numTwo=null;
let operator=null;
let display=document.querySelector(".display");

// math functions for two numbers
function add(a ,b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return null
    }
    return Math.round(a/b);
}

//operate function with the operators
function operate(op, a, b){
    if(op=="add"){
        return add(a, b);
    }
    else if(op=="subtract"){
        return subtract(a, b);
    }
    else if(op=="multiply"){
        return multiply(a,b);
    }
    else if(op=="divide"){
        return divide(a,b);
    }
};

//find the numbers clicked

let buttons=document.querySelector(".container");
buttons.addEventListener("click", (b) => {
    const button=b.target;
    if(button.classList.contains("zero")){
        display.textContent="0";
    }
    else if(button.classList.contains("one")){
        display.textContent="1";
    }
    else if(button.classList.contains("two")){
        display.textContent="2";
    }
    else if(button.classList.contains("three")){
        display.textContent="3";
    }
    else if(button.classList.contains("four")){
        display.textContent="4";
    }
    else if(button.classList.contains("five")){
        display.textContent="5";
    }
    else if(button.classList.contains("six")){
        display.textContent="6";
    }
    else if(button.classList.contains("seven")){
        display.textContent="7";
    }
    else if(button.classList.contains("eight")){
        display.textContent="8";
    }
    else if(button.classList.contains("nine")){
        display.textContent="9";
    }
    else if(button.classList.contains("plus")){
        display.textContent="+";
    }
    else if(button.classList.contains("minus")){
        display.textContent="-";
    }
    else if(button.classList.contains("multiply")){
        display.textContent="X";
    }
    else if(button.classList.contains("divide")){
        display.textContent="/";
    }
    else if(button.classList.contains("power")){
        display.textContent="^";
    }
    else if(button.classList.contains("equal")){
        display.textContent="=";
    }
    else if(button.classList.contains("clear")){
        display.textContent="C";
    }
    else if(button.classList.contains("dot")){
        display.textContent=".";
    }
    else if(button.classList.contains("del")){
        display.textContent="del";
    }
    
    
});

console.log(add(3, 4));
console.log(subtract(4, 4));
console.log(multiply(5,5));
console.log(divide(300, 30));
console.log(operate("add", 3, 4));