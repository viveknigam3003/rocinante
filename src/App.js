import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./components/Authentication/LoginScreen";
import "./App.css";
import LoginForm from "./components/Authentication/LoginForm";
import AddAccount from "./components/Authentication/AddAccount";
import AppLayout from "./layout/AppLayout";
import { AuthContext } from "./components/Authentication/AuthContext";
import { authTokensPresent } from "./components/Utils/User";
import PrivateRoute from "./components/Authentication/PrivateRoute";

function App() {
  const existingToken = authTokensPresent();
  const [authToken, setAuthToken] = useState(existingToken);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginScreen} />
          <Route
            path="/auth/admin"
            component={() => <LoginForm privilege="admin" />}
          />
          <Route
            path="/auth/user"
            component={() => <LoginForm privilege="user" />}
          />
          <Route path="/adduser" component={AddAccount} />
          <PrivateRoute path="/app" component={AppLayout} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
