var person = {
    firstname : "Jone", 
    lastname : "Selasie",

    getFullname : function(){
        return this.firstname + " " +  this.lastname;
    }
    
}

var logname = function (arg1, arg2){
    console.log("fullname  " + this.getFullname());
    
    console.log("fullname" + " "+ this.getFullname() + " "+ arg1+ " " + arg2);
    console.log("__________________");
}
//var logedName = logname.bind(person)
var logedname = logname.bind(person)
logedname()

logname.call(person, "arg1", "arg2")
logname.apply(person, ["arg1", "arg2"])

// function currying 
// function currying the creating a copy of function with the preset arguments 

function multiplay (a, b){
    return a*b;
}

var multByTwo=  multiplay.bind(this, 2);

console.log(multByTwo(3));
