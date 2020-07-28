import React, { useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DialogNewSection from "./DialogNewSection";

const useStyles = makeStyles({
  title: {
    fontFamily: "Cern",
    fontWeight: 500,
    fontSize: 14,
    color: "#000000",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function ServerConfigTitle() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    // Process Delete Request.then(setOpen(false))
    setOpen(false);
  };

  return (
    <div id="title" className={classes.title}>
      <span style={{ opacity: 0.5 }}>Config</span>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon fontSize="inherit" color="primary" />
      </IconButton>
      <DialogNewSection open={open} handleClose={handleClose} />
    </div>
  );
}

export default ServerConfigTitle;
