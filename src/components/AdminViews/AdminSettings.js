import React from "react";
import { makeStyles } from "@material-ui/core";
import ServerList from "./ServerList";
// import Config from "./Config";

const useStyles = makeStyles({
  root: {
    maxWidth: "40%",
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "Cern",
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    color: "#000000",
    opacity: 0.5,
  },
});

function AdminSettings() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Servers
      </div>
      <ServerList />
    </div>
  );
}

export default AdminSettings;
