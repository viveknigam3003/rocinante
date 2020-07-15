import React from "react";
import { makeStyles } from "@material-ui/core";
import Explore from "./Explore";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    height: "80vh",
    flexGrow: 1,
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontFamily: "Cern",
  },
  pageTitle: {
    textAlign: "left",
    fontWeight: 200,
    fontSize: 48,
    opacity: 0.85,
    width: "inherit",
  },
}));

function RenderLayout(props) {
  const classes = useStyles({ drawerWidth: props.drawerWidth });

  function renderSwitch(page) {
    switch (page) {
      case "Explore":
        return <Explore />;
      case "Storage":
        return <div/>
      default:
        return <Redirect to="/" />;
    }
  }

  return (
    <div className={classes.content}>
      <div id="page-title" className={classes.pageTitle}>
        {props.page}
      </div>
      {renderSwitch(props.page)}
    </div>
  );
}

export default RenderLayout;