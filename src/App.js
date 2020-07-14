import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./components/Authentication/LoginScreen";
import "./App.css";
import LoginForm from "./components/Authentication/LoginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginScreen} />
        <Route path="/auth/admin" component={() => <LoginForm privilege="admin"/>}/>
        <Route path="/auth/user" component={() => <LoginForm privilege="user"/>}/>
      </div>
    </Router>
  );
}

export default App;