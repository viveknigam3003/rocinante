import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { getConfig } from "../Utils/Config";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    fontSize: theme.typography.pxToRem(15),
  },
}));

function ServerConfig(props) {
  const classes = useStyles();
  const servername = props.server;

  React.useEffect(() => {
    async function fetchConfig(){
      await getConfig(servername)
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err));
    }

    fetchConfig();
  }, [servername]);

  return <Typography className={classes.root}>All Config</Typography>;
}

ServerConfig.propTypes = {
  server: PropTypes.string
};

export default ServerConfig;
