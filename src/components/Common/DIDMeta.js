import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import MetaIcons from "./DIDMetaIcons";
import { grey } from "@material-ui/core/colors";
import DIDMetaDetails from "./DIDMetaDetails";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 12,
    padding: 12,
    float: "right",
    minWidth: "20%",
    maxHeight: "80%"
  },
  title: {
    fontFamily: "Cern",
    fontWeight: 500,
    fontSize: 24,
    padding: 5,
    color: grey[800],
  },
});

function DIDMeta(props) {
  const classes = useStyles();
  
  return (
    <Paper variant="outlined" className={classes.root}>
      <MetaIcons icon={props.icon} />
      <div id="did-name" className={classes.title}>
        {props.did}
      </div>
      <DIDMetaDetails meta={props.meta} />
    </Paper>
  );
}

export default DIDMeta;
