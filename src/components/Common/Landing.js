import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import ToolbarOptions from "./ToolbarOptions";
import Sidebar from "./Sidebar";
import ContentLayout from "./ContentLayout";

const useStyles = makeStyles({
  Toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    color: grey[800],
    fontFamily: "Cern",
    fontSize: 18,
  },
});

function Landing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar className={classes.Toolbar}>
          <ToolbarOptions />
        </Toolbar>
      </AppBar>
      <Sidebar width={240}/>
      <ContentLayout drawerWidth={240}/>
    </React.Fragment>
  );
}

export default Landing;
