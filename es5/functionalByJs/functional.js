
function mapFunction(arr, func){
    var newArr= [];
    
    for (var i=0; i< arr.length; i++){
        newArr.push(func(arr[i]))    
    }
    return newArr;
}

var arr = [1,2,3,4]

var arrTwo= mapFunction(arr, function(i){
    return i>2;
})
function isGreaterThanLimit(limit, item){
    return item>limit;
}
var arr4= mapFunction(arr,isGreaterThanLimit.bind(this,1))

console.log(arr)
console.log(arr4)
console.log(arrTwo)
