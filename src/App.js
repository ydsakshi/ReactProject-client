import React, { Component } from 'react'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import './App.css';
import Register from './component/layout/Register';
import Login from './component/layout/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
        <Route exact path="/register" component={Register} /> 
        <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}
