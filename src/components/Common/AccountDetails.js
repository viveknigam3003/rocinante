import React from "react";
import PropTypes from "prop-types";
import { AccordionDetails, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        overflowWrap: "break-word",
        padding: 10
    },
    option: {
        minWidth: "20%"
    },
    value: {
        width: "80%",
        textAlign: "left"
    }
})

function AccountDetails(props) {
    const classes = useStyles();
  const account = props.details;
  let key = 0;

  return (
    <AccordionDetails className={classes.root}>
      {Object.keys(account).map((config) => (
        <div className={classes.item} key={++key}>
          <div className={classes.option}>{config}</div>
          <div className={classes.value}>
            {config === "server" ? account[config].name : account[config]}
          </div>
        </div>
      ))}
    </AccordionDetails>
  );
}

AccountDetails.propTypes = {
  details: PropTypes.object,
};

export default AccountDetails;
