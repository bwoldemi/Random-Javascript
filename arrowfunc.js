// arrow function syntax 

const pritFullName= (fname, lname)=> {
    console.log(fname + " " + lname);
  }
  pritFullName("bereket", "woldemicael")
  
  // if the argument is one can be writen like this 
  const printName = name => {
    console.log(name)
  }
  printName("bereket")
  
  // if the return is one 
  const multiplyByTwo= number => number *2;
  console.log(multiplyByTwo(3))