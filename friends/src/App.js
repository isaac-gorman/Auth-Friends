import React from "react";
import logo from "./logo.svg";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Auth Friends</h5>
      </header>
      <Route exact path="/">
        <StartScreen />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
