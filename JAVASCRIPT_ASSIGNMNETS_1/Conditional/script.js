/* Write a JavaScript program that accepts two integers and displays the larger of the two */
function largerNumber(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is larger than ${num2}`);
        return num1;
    }
    else if(num1 < num2){
        console.log(`${num2} is larger than ${num1}`);
        return num2;
    }
    else if(num1 === num2)
        console.log(`${num1} is equal to ${num2}`);
        return num1 || num2;
}

console.log(largerNumber(1, 1));