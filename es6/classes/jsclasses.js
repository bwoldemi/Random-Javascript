
//es5 
var Person5 = function(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
}
Person5.prototype.claculateAge= function(){
    
    return   new Date().getFullYear() - this.yearOfBirth;
}

var person = new Person5("bereket",1983)
console.log("es5 " + person.claculateAge())
console.log("---------------------------------------")
// es6
class Person6 {
    constructor(name, yearofBirth){
        this.name= name;
        this.yearofBirth= yearofBirth
    }
    claculateAge(){
        return  (new Date().getFullYear() - this.yearofBirth);
    }
    static gretting(){
        console.log("Hello Es6 classes")
    }
}

let person6 = new Person6("bereket",1983)
console.log(`class in es6 ${person6.claculateAge()}`)
Person6.gretting()