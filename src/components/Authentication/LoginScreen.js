import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const useStyles = makeStyles({
  root: {
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
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 0,
    margin: 50,
  },
  loginOptions: {
    display: "flex",
    justifyContent: "space-around",
  },
  card: {
    height: 150,
    width: 200,
    margin: 20,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 200,
    padding: 20,
    fontSize: 18,
  },
  cardIcon: {
    padding: 20,
    color: "#000000",
    opacity: 0.8
  },
});

function LoginScreen() {
  const classes = useStyles();

  return (
    <div id="login-root" className={classes.root}>
      <div id="login-title" className={classes.title}>
        Log in to Rucio
      </div>
      <div id="login-subtitle" className={classes.subtitle}>
        Select a privilege level to login
      </div>
      <div id="login-as" className={classes.loginOptions}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardContent}>
            <SupervisorAccountIcon fontSize="large" className={classes.cardIcon} /> Admin
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardContent}>
            <PersonIcon fontSize="large" className={classes.cardIcon} /> User
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default LoginScreen;
