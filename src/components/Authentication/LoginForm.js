import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import LogoDark from "../../layout/LogoDark";

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
    <div id="login-form" className={classes.root}>
      <LogoDark logo={classes.logo} />
      <div id="header" className={classes.header}>
        <IconButton className={classes.icon}>
          <Link to="/" style={{ height: 20, width: 22, color: "inherit" }}>
            <ArrowBackIosIcon fontSize="small" />
          </Link>
        </IconButton>
        <div id="title" className={classes.title}>
          Login with {props.privilege} rights
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
