
// ES5
var box ={
    
    color: 'green',
    position: 1,
    self: this,
    clickMe: function (){
        var self= this;
        document.querySelector(".green").
        addEventListener("click", function(){
            alert("selected box is"+  " "+
             self.color+ " and the postion is "+ self.position);
        });
    }

}
//box.clickMe();


// es6 the this will share the lexical enviroment 
var es6box={

    color: 'green',
    position: 1,
    self: this,
    clickMe: function (){
       
        document.querySelector(".green").
        addEventListener("click", ()=>{
            alert("selected box is"+  " "+
             this.color+ " and the postion is "+ this.position);
        });
    }

}
//es6box.clickMe();


// es6 
var es6box1={

    color: 'green',
    position: 1,
    self: this,
    clickMe:  ()=>{
       
        document.querySelector(".green").
        addEventListener("click", ()=>{
            alert("selected box is"+  " "+
             this.color+ " and the postion is "+ this.position);
        });
    }

}
es6box1.clickMe();
