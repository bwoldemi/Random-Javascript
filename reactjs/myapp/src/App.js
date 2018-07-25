import React, { Component } from 'react';
import {Person} from './person'
import './App.css';


class App extends Component {
  state= {
    persons: [
      {name:"kebede", age: 35},
      {name:"Abebe", age: 37}
    ]
    
  }

   nameChangeHandler= (newname)=>{
    this.setState({
      persons:[
        {name:newname, age: 35},
        {name:"Abebe", age: 37}
      ]
    })
  }
  changeNameHandeler=(e)=>{
      this.setState({
        persons : [
          {name: e.target.value, age: 35},
          {name:"Abebe", age: 37}
        ]
      });
      
  }
  
  render() {
    return (
      <div className="App">
        <p> </p>
        <button onClick={this.nameChangeHandler.bind(this,"Tesema")}> Update React Dom </button>  
        <Person click={()=>this.nameChangeHandler("Kebede")} 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}> Some childeren</Person>

        <Person
           changeName= {this.changeNameHandeler}
           name={this.state.persons[1].name}
           age={this.state.persons[1].age} />
       
      </div>
    );
  }
}

export default App;
