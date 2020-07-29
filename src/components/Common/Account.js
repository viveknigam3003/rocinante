import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import AccountConfig from "./AccountList";

const useStyles = makeStyles({
  root: {
    width: "inherit",
    textAlign: "left",
    fontFamily: "Cern",
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    color: grey[800],
    paddingTop: 20,
    paddingBottom: 20,
  },
  hint: {
    fontSize: 14,
    fontWeight: 500,
    color: "#000000",
    opacity: 0.5,
  },
  info: {
    fontSize: 18,
    color: "#000000",
    opacity: 0.8,
    paddingRight: 10,
  },
});
function Account() {
  const classes = useStyles();
  const account = localStorage.getItem("CURR_ACCOUNT");

  return (
    <div id="account-root" className={classes.root}>
      <div id="account-name" className={classes.title}>
        <div className={classes.hint}>current account</div>
        <div style={{ paddingTop: 5, paddingBottom: 10 }}>{account}</div>
      </div>
      <div id="other-accounts">
        <div className={classes.hint}>all accounts</div>
        <AccountConfig />
      </div>
    </div>
  );
}

export default Account;
