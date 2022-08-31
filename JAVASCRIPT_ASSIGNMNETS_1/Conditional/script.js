/* Write a JavaScript program that accepts two integers and displays the larger of the two */
function largerNumber(num1, num2){
    if(num1 > num2){
        return `${num1} is larger than ${num2}.`;
    }
    else if(num1 < num2){
        return `${num2} is larger than ${num1}.`;
    }
    else if(num1 === num2)
        return `${num1} is equal to ${num2}.`;
}

console.log(largerNumber(1, 7));

/* Write a JavaScript program that checks whether an integer is an even or an odd number.
 */

function evenOrOdd(num3){
    if(num3 % 2 === 0)
    return `${num3} is Even`;
    else
    return `${num3} is Odd`;
}

console.log(evenOrOdd(10));