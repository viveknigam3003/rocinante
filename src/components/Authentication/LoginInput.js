import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import LoginButton from "./LoginButton";
import { Redirect } from "react-router-dom";
import { saveCurrentUser, authTokensPresent } from "../Utils/User";
import { loginWithUserpass } from "../Utils/Authentication";
import { useAuth } from "./AuthContext";
import LoginSnackbar from "./LoginSnackbar";

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
  const [status, setStatus] = useState(0);
  const { setAuthToken } = useAuth();
  const auth = authTokensPresent();

  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  /**
   * Updates the status to display the alert accordingly.
   *
   * @param {number} value Status Code to set as status for the request.
   */
  function updateStatus(value) {
    setStatus(null);
    const newStatus = value;
    setStatus(newStatus);
  }

  /**
   * Handles the Login event on form submit.
   */
  function handleSubmit(event) {
    if (loading) return;
    event.preventDefault();
    setLoading(true);
    loginWithUserpass(account, username, password)
      .then((res) => {
        setLoading(loading ? false : null);
        if (res.status === 200) {
          setAuthToken(auth);
          saveCurrentUser(account, username, password);
          updateStatus(200);
          setTimeout(() => setLoggedin(true), 2000);
        }
      })
      .catch((err) => {
        setLoading(loading ? false : null);
        const errorcode = Number(err.toString().split(" ").pop());
        if (typeof(errorcode) === "number") updateStatus(errorcode);
        else console.log(err);
      });
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
      <LoginSnackbar status={status}/>
    </Container>
  );
}

export default LoginInput;
