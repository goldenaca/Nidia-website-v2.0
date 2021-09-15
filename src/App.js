import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Rincon from "./screens/Rincon";
import Soñador from "./screens/Soñador";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/rincon-del-soñador" exact component={Rincon} />
          <Route path="/soñador-del-arrayan" exact component={Soñador} />
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
