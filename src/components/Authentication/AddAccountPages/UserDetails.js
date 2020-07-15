import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LogoDark from "../../../layout/LogoDark";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    fontFamily: "Cern",
  },
  title: {
    fontSize: 28,
    fontWeight: 200,
    padding: 20,
    margin: 50,
    marginBottom: 0,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 0,
    marginBottom: 10,
  },
  form: {
    width: "100%",
    margin: 0,
    backgroundColor: "#fffafa",
    overflowX: "hidden",
    overflow: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonPrimary: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 600,
  },
  buttonSecondary: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 5,
  },
  logo: {
    marginTop: 60,
    height: 50,
  }
}));

function UserDetails(props) {
  const classes = useStyles();

  function next(e) {
    e.preventDefault();
    props.nextStep();
  }

  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return props.account.length > 0 && props.username.length > 0 && props.password.length > 0;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <LogoDark className={classes.logo}/>
        <div className={classes.title}>Add a new account</div>
        <div className={classes.subtitle}>
          Enter your Rucio Account details
        </div>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="Account"
            name="account"
            autoComplete="account"
            defaultValue={props.account}
            autoFocus
            onChange={(e) => props.setAccount(e.target.value)}
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
            defaultValue={props.username}
            autoComplete="current-username"
            onChange={(e) => props.setUsername(e.target.value)}
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
            defaultValue={props.password}
            autoComplete="current-password"
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </form>
        <Button
          className={classes.submit}
          variant="contained"
          color="primary"
          onClick={next}
          disabled={!validateForm()}
        >
          <Typography className={classes.buttonPrimary}>Next:</Typography>
          <Typography className={classes.buttonSecondary}>
            Server Details
          </Typography>
        </Button>
      </div>
    </Container>
  );
}

export default UserDetails;
