var rect = require('./rect');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l < 0 || b < 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	console.log("The area of a rectangle of dimensions length = "
               + l + " and breadth = " + b + " is " + rect.area(l,b));
	console.log("The perimeter of a rectangle of dimensions length = "
               + l + " and breadth = " + b + " is " + rect.perimeter(l,b));
    }

    var counter = 2;

   setTimeout(function(){
       counter = counter+3;
       console.log(counter)
   }, 2000);
   
   console.log(counter)
   setTimeout(function(){
    console.log(counter)
   }, 3000)
}


solveRect(2,4);