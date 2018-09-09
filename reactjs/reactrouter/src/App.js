import React, { Component } from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, NavLink} from 'react-router-dom'

const Home = ()=>{
  return (
    <div>
      <h1> Home component </h1>
    </div>
  )
}
const ErrorPage = ()=>{
  return (
    <div>
      <p> Error </p>
    </div>
  );
}
function Navigation(){
  return (
    <div>
      <NavLink to="/home"> Home </NavLink>
      <span> | </span>
      <NavLink to="/about"> About </NavLink>
      <span> | </span>
      <NavLink to="/contact"> Contact</NavLink>
    </div>
  )
}

const About = ()=>{
  return (
    <div>
      
    </div>
  )
}
const Contact = ()=>{
  return (
    <div>
      <p> Contact </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path='/home' component= {Home } />
              <Route path='/about' component= {About } />
              <Route path='/contact' component= {Contact} />
              <Route  component= {ErrorPage } />
            </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
