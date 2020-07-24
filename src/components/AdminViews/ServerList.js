import React, { useState } from "react";
import { makeStyles, Button, Paper } from "@material-ui/core";
import { serverStatus } from "../Utils/Servers";

const useStyles = makeStyles({
  root: {
    fontFamily: "Cern",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    fontSize: 18,
  },
});

function ServerList() {
  const classes = useStyles();
  const serverDetails = serverStatus();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <div id="server-list" className={classes.root}>
      {serverDetails.map((item, index) => (
        <div key={item.server}>
          <div className={classes.listItem}>
            <div>{item.server}</div>
            <div className={classes.status}>{item.status}</div>
            <Button onClick={handleClick}>Config</Button>
          </div>
          {open ? <Paper>Configs</Paper> : null}
        </div>
      ))}
    </div>
  );
}

export default ServerList;
