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
}

console.log(add(3, 4));
console.log(subtract(4, 4));
console.log(multiply(5,5));
console.log(divide(300, 30));
console.log(operate("add", 3, 4));