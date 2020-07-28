import React, { useState } from "react";
import { makeStyles, AccordionDetails } from "@material-ui/core";
import PropTypes from "prop-types";
import EditButtons from "./ServerConfigEdit";
import ServerConfigEditForm from "./ServerConfigEditForm";
import ServerConfigTitle from "./ServerConfigTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    fontSize: theme.typography.pxToRem(15),
    minWidth: "100%",
  },
  section: {
    padding: 2,
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
        <ServerConfigTitle />
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
                    section={section}
                    option={option}
                    optionValue={config[section][option]}
                    server={props.server}
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
  server: PropTypes.string,
};

export default ServerConfig;
