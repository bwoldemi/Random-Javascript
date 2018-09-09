
function square (){
   let nums = [];
   for (let number of arguments){
       nums.push(number*number)
   }
   return nums;
}

square(3,3,4,4,3,2,3,4,5,3,3,4,5,2,3,3) 
console.log("dd")