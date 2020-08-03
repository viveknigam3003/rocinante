import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import AccountConfig from "./AccountList";
import AlertSnackbar from "../Utils/Snackbar";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "inherit",
    textAlign: "left",
    fontFamily: "Cern",
    overflow: "auto",
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
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

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
      <AlertSnackbar
        message="Settings Saved"
        severity="success"
        open={storeState.snackbar}
        onExited={() => dispatch({type: "HIDE_SNACKBAR"})}
      />
    </div>
  );
}

export default Account;
