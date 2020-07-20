import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import LoginButton from "./LoginButton";
import { Redirect } from "react-router-dom";
import { saveCurrentUser } from "../Utils/User";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Cern",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function LoginInput() {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [loading, setLoading] = useState();
  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  /**
   * Handles the Login event on form submit.
   */
  function handleSubmit(event) {
    if (loading) return;
    event.preventDefault();
    console.log("Submit Handled");
    setLoading(true)
    setLoggedin(true)
    saveCurrentUser(account, username, password);
  }

  if (loggedin) {
    return <Redirect to="/app/explore" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="account"
          label="Account"
          name="account"
          autoComplete="account"
          autoFocus
          onChange={(e) => setAccount(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          type="username"
          id="username"
          autoComplete="current-username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!validateForm()}
          className={classes.submit}
          onClick={handleSubmit}
          loading={loading}
        >
          Sign in
        </LoginButton>
      </form>
    </Container>
  );
}

export default LoginInput;
