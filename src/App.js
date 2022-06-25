import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from"./pages/HomePage.js"
import PropertyList from "./pages/PropertyListings.js"
import CreateListingForm from "./components/CreateListing"
import TenantList from "./pages/Tenants.js"
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
        <Route exact path ="/properties" element = {<PropertyList/>}/>
        <Route exact path ="/tenants" element = {<TenantList/>} />
        <Route exact path ="/createListing" element = {<CreateListingForm/>}/>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;