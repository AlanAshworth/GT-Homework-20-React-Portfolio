import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./containers//About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
