import React, { useState } from "react";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { serverStatus } from "../Utils/Servers";
import { green, red } from "@material-ui/core/colors";
import SettingsIcon from "@material-ui/icons/Settings";
import ServerConfig from "./ServerConfig";
import { getConfig } from "../Utils/Config";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Cern",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    width: "100%",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000000",
    opacity: 0.8,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  statusC: {
    fontSize: theme.typography.pxToRem(15),
    color: green[600],
    fontWeight: 500,
    opacity: 1,
  },
  statusD: {
    fontSize: theme.typography.pxToRem(15),
    color: red[600],
    fontWeight: 500,
    opacity: 1,
  },
}));

function ServerList() {
  const classes = useStyles();
  const serverDetails = serverStatus();
  const [config, setConfig] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [details, showDetails] = useState(false);
  const [server, setServer] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    event.preventDefault();
    setExpanded(isExpanded ? panel : false);
    showDetails(!details);
  };

  React.useEffect(() => {
    getConfig(server)
      .then((res) => setConfig(res.data))
      .catch((err) => console.log(err));
  }, [server]);

  return (
    <div id="server-list" className={classes.root}>
      {serverDetails.map((item, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          onClick={() => setServer(item.server)}
          key={item.server}
        >
          <AccordionSummary
            expandIcon={<SettingsIcon />}
            aria-controls={`${item.server}-content`}
            id={`${item.server}-header`}
          >
            <Typography className={classes.listItem}>{item.server}</Typography>
            <Typography
              className={
                item.status === "Connected" ? classes.statusC : classes.statusD
              }
            >
              {item.status}
            </Typography>
          </AccordionSummary>
          {config !== undefined ? (
            <ServerConfig config={config} server={item.server} />
          ) : (
            <Typography className={classes.listItem}>Loading...</Typography>
          )}
        </Accordion>
      ))}
    </div>
  );
}

export default ServerList;
