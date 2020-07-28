import React, { useState } from "react";
import { makeStyles, AccordionDetails } from "@material-ui/core";
import PropTypes from "prop-types";
import EditButtons from "./ServerConfigEdit";
import ServerConfigEditForm from "./ServerConfigEditForm";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    fontSize: theme.typography.pxToRem(15),
    minWidth: "100%",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "60%",
  },
  optionName: {
    overflowWrap: "break-word",
    padding: 10,
  },
  optionValue: {
    overflowWrap: "break-word",
    padding: 10,
  },
}));

function ServerConfig(props) {
  const classes = useStyles();
  const config = props.config;
  const [editSection, setEditSection] = useState(null);

  return (
    <AccordionDetails>
      <div className={classes.root}>
        <div id="title" className={classes.title}>
          Config
        </div>
        {Object.keys(config).map((section, index) => (
          <div key={section} className={classes.section}>
            <div className={classes.sectionTitle}>
              {section}
              {index === editSection ? (
                <EditButtons
                  editMode={true}
                  cancelEdit={() => setEditSection(null)}
                  confirmEdit={() => console.log("Saved")}
                />
              ) : (
                <EditButtons
                  editMode={false}
                  onClick={() => setEditSection(index)}
                />
              )}
            </div>
            {Object.keys(config[section]).map((option) => (
              <div key={option} className={classes.options}>
                {index === editSection ? (
                  <ServerConfigEditForm
                    option={option}
                    optionValue={config[section][option]}
                  />
                ) : (
                  <React.Fragment>
                    <div id="option-name" className={classes.optionName}>
                      {option}
                    </div>
                    <div id="option-value" className={classes.optionValue}>
                      {config[section][option]}
                    </div>
                  </React.Fragment>
                )}
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
