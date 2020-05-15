import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
