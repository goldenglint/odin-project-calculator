//variables
let numOne=null;
let numTwo=null;
let operator=null;
let lastType=null;
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

function power(a,b){
    return Math.pow(a, b);
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
    else if(op=="power"){
        return power(a,b);
    }
};

//find the numbers clicked

let buttons=document.querySelector(".container");
buttons.addEventListener("click", (b) => {
    const button=b.target;
    if(button.classList.contains("zero")){
        if(lastType==null){
            numOne=0;
            display.textContent="0";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="0";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="0";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=0;
            display.textContent="0";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);        
        
    }
    else if(button.classList.contains("one")){
        if(lastType==null){
            numOne=1;
            display.textContent="1";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="1";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="1";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=1;
            display.textContent="1";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);       
    }
    else if(button.classList.contains("two")){
        if(lastType==null){
            numOne=2;
            display.textContent="2";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="2";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="2";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=2;
            display.textContent="2";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);       
    }
    else if(button.classList.contains("three")){
        if(lastType==null){
            numOne=3;
            display.textContent="3";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="3";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="3";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=3;
            display.textContent="3";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);       
    }
    else if(button.classList.contains("four")){
        if(lastType==null){
            numOne=4;
            display.textContent="4";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="4";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="4";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=4;
            display.textContent="4";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);      
    }
    else if(button.classList.contains("five")){
        if(lastType==null){
            numOne=5;
            display.textContent="5";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="5";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="5";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=5;
            display.textContent="5";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);      
    }
    else if(button.classList.contains("six")){
        if(lastType==null){
            numOne=6;
            display.textContent="6";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="6";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="6";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=6;
            display.textContent="6";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);      
    }
    else if(button.classList.contains("seven")){
        if(lastType==null){
            numOne=7;
            display.textContent="7";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="7";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="7";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=7;
            display.textContent="7";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);     
    }
    else if(button.classList.contains("eight")){
        if(lastType==null){
            numOne=8;
            display.textContent="8";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="8";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="8";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=8;
            display.textContent="8";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);      
    }
    else if(button.classList.contains("nine")){
        if(lastType==null){
            numOne=9;
            display.textContent="9";
            lastType="numOne";
        }
        else if(lastType=="numOne"){
            display.textContent+="9";
            numOne=Number(display.textContent);
    
        }
        else if(lastType=="numTwo"){
            display.textContent+="9";
            numTwo=Number(display.textContent);
            
        }
        else{
            numTwo=9;
            display.textContent="9";
            lastType="numTwo";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("plus")){
        if(lastType=="numOne"){
            display.textContent="+";
            operator="add";
            lastType="operator";
        }
        else if(lastType=="numTwo"){
            numOne=operate(operator, numOne, numTwo);
            operator="add";
            numTwo=null;
            display.textContent=numOne;
            lastType="operator";
        }
        else if(lastType==null){
            display.textContent="ERROR (no numbers)";
        }
        else{
            display.textContent="ERROR (cannot apply function)";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("minus")){
        if(lastType=="numOne"){
            display.textContent="-";
            operator="subtract";
            lastType="operator";
        }
        else if(lastType=="numTwo"){
            numOne=operate(operator, numOne, numTwo);
            operator="subtract";
            numTwo=null;
            display.textContent=numOne;
            lastType="operator";
        }
        else if(lastType==null){
            display.textContent="ERROR (no numbers)";
        }
        else{
            display.textContent="ERROR (cannot apply function)";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("multiply")){
        if(lastType=="numOne"){
            display.textContent="X";
            operator="multiply";
            lastType="operator";
        }
        else if(lastType=="numTwo"){
            numOne=operate(operator, numOne, numTwo);
            operator="multiply";
            numTwo=null;
            display.textContent=numOne;
            lastType="operator";
        }
        else if(lastType==null){
            display.textContent="ERROR (no numbers)";
        }
        else{
            display.textContent="ERROR (cannot apply function)";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("divide")){
        if(lastType=="numOne"){
            display.textContent="/";
            operator="divide";
            lastType="operator";
        }
        else if(lastType=="numTwo"){
            numOne=operate(operator, numOne, numTwo);
            operator="divide";
            numTwo=null;
            display.textContent=numOne;
            lastType="operator";
        }
        else if(lastType==null){
            display.textContent="ERROR (no numbers)";
        }
        else{
            display.textContent="ERROR (cannot apply function)";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("power")){
        if(lastType=="numOne"){
            display.textContent="^";
            operator="power";
            lastType="operator";
        }
        else if(lastType=="numTwo"){
            numOne=operate(operator, numOne, numTwo);
            operator="power";
            numTwo=null;
            display.textContent=numOne;
            lastType="operator";
        }
        else if(lastType==null){
            display.textContent="ERROR (no numbers)";
        }
        else{
            display.textContent="ERROR (cannot apply function)";
        }
        console.log(numOne);
        console.log(numTwo);
    }
    else if(button.classList.contains("equal")){
        
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