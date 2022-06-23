import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from"./pages/HomePage.js"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;