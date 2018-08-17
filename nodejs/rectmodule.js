module.export = function(x, y, callback){
    try {
        
    if (x <= 0 || y <=0){
        throw new Error(" incorect parametere")
    }else{
        callback(null, {
            area: function(){
                return x*y;
            },
            peremetere: function(){
                return 2*(x*y);
            }
        })
    }

    } catch (error) {
        callback(error, null);    
    }
    
}