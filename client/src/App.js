import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
