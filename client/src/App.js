import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import "./App.css";

const App = () => {

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
