import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    fontSize: theme.typography.pxToRem(15),
  },
}));

function ServerConfig(props) {
  const classes = useStyles();
  const config = props.config || {};

  function parseConfig(configObj) {
    const parsedConfig = [];
    Object.keys(configObj).forEach((key, index) => {
      console.log(key);

    })
    return parsedConfig
  }

  return (
    <Typography className={classes.root}>
      {parseConfig(config)}
    </Typography>
  );
}

ServerConfig.propTypes = {
  config: PropTypes.object,
};

export default ServerConfig;
