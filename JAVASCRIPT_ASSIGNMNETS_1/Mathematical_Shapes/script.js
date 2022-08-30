/* 1-Write a JavaScript program to find the diagonal of a square where the length of each side is 9.
a² + a² = diagonal²
diagonal = √(a² + a²) = √(2 * a²)
diagonal = a√2 */

function diagonal(length){
     return length * Math.sqrt(2);
}
const result1 = diagonal(3); 
console.log(`The diagonal of a square where the length of each side is 9 is ${result1}`);

/* 2_Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
Triangle Area = 0.25 × √( (a + b + c) × (-a + b + c) × (a - b + c) × (a + b - c) )
*/

let firstBlock;
let secondBlock;
let thirdBlock;
let fourthBlock;

function areaOfTriangle(sideA, sideB, sideC){
    firstBlock = sideA + sideB + sideC; 
    secondBlock = -sideA + sideB + sideC; 
    thirdBlock = sideA - sideB + sideC; 
    fourthBlock = sideA + sideB - sideC; 

    triangleArea = (firstBlock * secondBlock * thirdBlock * fourthBlock);
    return Math.sqrt(triangleArea) * 0.25;
}

const result2 = areaOfTriangle(5, 6, 7);

console.log(`The area of a triangle where lengths of the three of its sides are 5, 6 and 7 is ${result2}`);

/* 3_Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
Circunference = 2 * π * R
Area of a circle = π * r2
Diameter = 2 * Radius
Area of a circle = π * (d/2)2
 */

let PI = 3.141592;
function circunference(radius){
    return 2 * PI * radius;
}
const result3 = circunference(4);
console.log(`The circumference of a circle whose radius is 4 is ${result3}`);

function diameter(radius){
    return 2 * radius;
}

console.log(diameter(4));

function areaOfCircleRadius(radius){
    return PI * radius * radius;
}

console.log(areaOfCircleRadius(4));

function areaOfCircleDiameter(radius){
    let diameterResult = diameter(radius);
    return PI * diameterResult/2 * diameterResult/2;
}

console.log(areaOfCircleDiameter(4));