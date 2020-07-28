import React from "react";
import { makeStyles, AccordionDetails } from "@material-ui/core";
import PropTypes from "prop-types";
import EditButtons from "./ServerConfigEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    fontSize: theme.typography.pxToRem(15),
    minWidth: "60%",
  },
  title: {
    fontFamily: "Cern",
    fontWeight: 500,
    fontSize: 14,
    color: "#000000",
    opacity: 0.5,
    padding: 10,
    paddingTop: 0,
  },
  section: {
    padding: 10,
  },
  sectionTitle: {
    color: "#3e55ab",
    fontWeight: 500,
    paddingBottom: 15,
  },
  options: {
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
}));

function ServerConfig(props) {
  const classes = useStyles();
  const config = props.config;

  return (
    <AccordionDetails>
      <div className={classes.root}>
        <div id="title" className={classes.title}>
          Config
        </div>
        {Object.keys(config).map((section) => (
          <div key={section} className={classes.section}>
            <div className={classes.sectionTitle}>{section}</div>
            {Object.keys(config[section]).map((option) => (
              <div key={option} className={classes.options}>
                <div id="option-name" className={classes.optionName}>
                  {option} 
                </div>
                <div id="option-value" className={classes.optionValue}>
                  {config[section][option]}
                </div>
                <EditButtons />
              </div>
            ))}
          </div>
        ))}
      </div>
    </AccordionDetails>
  );
}

ServerConfig.propTypes = {
  config: PropTypes.object,
};

export default ServerConfig;
