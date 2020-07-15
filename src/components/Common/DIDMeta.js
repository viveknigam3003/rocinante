import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  metadata: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 12,
    padding: 12,
    float: "right",
    minWidth: "20%"
  },
});

function DIDMeta(props) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.metadata}>
      <div id="meta-icon">{props.icon}</div>
      <div id="did-name">{props.did}</div>
      <div id="did-meta-info">{props.meta}</div>
    </Paper>
  );
}

export default DIDMeta;
