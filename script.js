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

let numbers=document.querySelector(".container");
numbers.addEventListener("click", (num) => {
    const digit=num.target;
    if(digit.classList.contains("zero")){
        console.log("zero");
    }
    else if(digit.classList.contains("one")){
        console.log("one");
    }
    else if(digit.classList.contains("two")){
        console.log("two");
    }
    else if(digit.classList.contains("three")){
        console.log("three");
    }
    else if(digit.classList.contains("four")){
        console.log("four");
    }
    else if(digit.classList.contains("five")){
        console.log("five");
    }
    else if(digit.classList.contains("six")){
        console.log("six");
    }
    else if(digit.classList.contains("seven")){
        console.log("seven");
    }
    else if(digit.classList.contains("eight")){
        console.log("eight");
    }
    else if(digit.classList.contains("nine")){
        console.log("nine");
    }
    
});

console.log(add(3, 4));
console.log(subtract(4, 4));
console.log(multiply(5,5));
console.log(divide(300, 30));
console.log(operate("add", 3, 4));