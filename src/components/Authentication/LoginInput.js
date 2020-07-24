import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import LoginButton from "./LoginButton";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Cern",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function LoginInput(props) {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form className={classes.form} onSubmit={props.handleSubmit}>
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
          onClick={(e) => props.handleSubmit(e, account, username, password)}
          loading={props.loading}
        >
          Sign in
        </LoginButton>
      </form>
    </Container>
  );
}

LoginInput.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default LoginInput;
