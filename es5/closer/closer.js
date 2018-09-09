function buildFunction(){
    
    var arr= [];
    
    for(i=0;  i < 10 ; i++){
            arr.push( function (){ console.log(i)})
    }
   
   
    return arr;
}
