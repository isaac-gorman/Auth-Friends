import React from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import StartScreen from "./components/StartScreen";
import PrivateRoute from "./components/PrivateRoute";
// import Friendslist from "./components/FirendsList";
import FriendsList from "./components/FirendsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Auth Friends</h5>
      </header>

      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/friendsList" component={FriendsList} />
      </Switch>
      {/* <Route exact path="/">
        <StartScreen />
      </Route> */}

      {/* <PrivateRoute exact path="/friendslist">
        <FriendsList />
      </PrivateRoute> */}
    </div>
  );
}

export default App;
