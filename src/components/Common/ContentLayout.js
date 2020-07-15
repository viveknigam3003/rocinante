import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    height: "80vh",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ContentLayout(props) {
  const classes = useStyles({ drawerWidth: props.drawerWidth });
  return <div className={classes.content}>Explore</div>;
}

export default ContentLayout;
