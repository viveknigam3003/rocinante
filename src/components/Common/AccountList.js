import React, { useState } from "react";
import {
  Accordion,
  makeStyles,
  AccordionSummary,
  Typography,
  Button,
} from "@material-ui/core";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import AccountDetails from "./AccountDetails";
const useStyles = makeStyles({
  root: {
    fontFamily: "Cern",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    width: "50%",
  },
  editBtn: {
    margin : 20,
    marginTop: 0
  }
});

function AccountConfig() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [details, showDetails] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const allAccounts = JSON.parse(localStorage.getItem("Accounts"));
  let key = 0;

  const handleChange = (panel) => (event, isExpanded) => {
    event.preventDefault();
    setExpanded(isExpanded ? panel : false);
    showDetails(!details);
  };
  return (
    <div className={classes.root}>
      {allAccounts.map((account, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={++key}
        >
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls={`${account.account}-content`}
            id={`${account.account}-header`}
          >
            <Typography className={classes.listItem}>
              {account.account}
            </Typography>
          </AccordionSummary>
          <AccountDetails details={account} />
          <Button onClick={() => setEditMode(true)} size="small" color="primary" variant="outlined" className={classes.editBtn}>Edit</Button>
        </Accordion>
      ))}
    </div>
  );
}

export default AccountConfig;
