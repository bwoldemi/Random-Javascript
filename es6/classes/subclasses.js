//es5 
var Person5 = function(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
}
Person5.prototype.claculateAge= function(){
    return   new Date().getFullYear() - this.yearOfBirth;
}

var Employee= function (name, yearOfBirth, salary){
    Person5.call(this, name, yearOfBirth);
    this.salary= salary
}
Employee.prototype = Object.create(Person5.prototype);
var emp = new Employee("bereket", 1983, 3000);
console.log(emp.claculateAge());

console.log("---------------------------")
// es6
class Person6 {
    constructor(name, yearOfBirth){
        this.name= name;
        this.yearOfBirth= yearOfBirth;
    }
    claculateAge(){
       return new Date().getFullYear() - this.yearOfBirth;
    }
}

class Employee6 extends Person6 {
    constructor(name, yearOfBirth, salary){
        super(name, yearOfBirth);
        this.salary= salary;
    }
}

var emp6 = new Employee6("name", 1983,3000);
console.log(emp6.claculateAge())