const sum = (a,b) => {
    return a + b;
}
const sub = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    return a / b;

}
const calculate = (a,b,operator) =>{
    if(operator==='+'){
        return sum(a,b);
    }
    else if(operator==='-'){
        return sub(a,b);
    }
    else if(operator==='*'){
        return multiply(a,b);
    }
    else if(operator==='/'){
        return divide(a,b);
    }
    else{
        console.error('Invalid operator');
        return 0;
    }
}

console.log(calculate(5,6,'/'));