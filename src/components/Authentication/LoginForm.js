import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LogoDark from "../../layout/LogoDark";
import LoginInput from "./LoginInput";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    fontFamily: "Cern",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 200,
    padding: 20,
    margin: 50,
    marginBottom: 0,
    marginTop: 10,
  },
  logo: {
    marginTop: 60,
    height: 50,
  },
  icon: {
    marginTop: 8,
  },
});

function LoginForm(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="login-form" className={classes.root}>
        <LogoDark className={classes.logo} />
        <div id="header" className={classes.header}>
          <IconButton href="/" className={classes.icon}>
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <div id="title" className={classes.title}>
            Login with {props.privilege} rights
          </div>
        </div>
        <LoginInput />
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
