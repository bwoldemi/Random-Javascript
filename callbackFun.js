function mult(x, y) {
    return x * y;
}
function add(x, y) {
    return x + y ;
}
function calculate(num1, num2, cal) {
    return cal(num1, num2)
}


var a = calculate(10, 5, add); //uses add callback
console.log(a); // logs 15

var b = calculate(10, 5, mult); //uses mult callback
console.log(b);
