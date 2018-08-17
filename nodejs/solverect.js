var rect = require("./rectmodule")

function solveRect(len ,w){
    console.log("solving ... ");

    rect(len,w, function(err, rectangle){
        if(err){
            console.log(err);
        }else{
            console.log("area  " + rectangle.area())
        }
    });

}
solveRect(2,3);