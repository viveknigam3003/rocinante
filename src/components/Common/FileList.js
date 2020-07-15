import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 12,
    margin: 12,
  },
});
function FileList() {
  const classes = useStyles();
  return (
    <Paper variant="outlined" id="file-list" className={classes.root}>
      Files Go Here
    </Paper>
  );
}

export default FileList;
