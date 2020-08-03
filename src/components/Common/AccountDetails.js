import React from "react";
import PropTypes from "prop-types";
import { AccordionDetails, makeStyles } from "@material-ui/core";
import AccountDetailsForm from "./AccountDetailsForm";
import { getAccountConfig, updateConfig } from "../Utils/User";
import AccountEditButtons from "./AccountEditButtons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    overflowWrap: "break-word",
    padding: 10,
  },
  option: {
    minWidth: "20%",
  },
  value: {
    width: "80%",
    textAlign: "left",
  },
});

function AccountDetails(props) {
  const classes = useStyles();
  const account = props.details;
  const [config, index] = getAccountConfig(
    account.account,
    account.server_name
  );
  let key = 0;

  const handleChange = (e) => {
    console.log(config);
    config[e.target.id] = e.target.value;
  };

  const handleSave = (e) => {
    e.preventDefault()
    updateConfig(config, index).then(console.log("Settings Saved"));
  };

  return (
    <AccordionDetails className={classes.root}>
      {Object.keys(account).map((config) => (
        <div className={classes.item} key={++key}>
          {props.editMode ? (
            <AccountDetailsForm
              onChange={(e) => handleChange(e)}
              keyValue={config}
              value={account[config]}
            />
          ) : (
            <React.Fragment>
              <div className={classes.option}>{config}</div>
              <div className={classes.value}>{account[config]}</div>
            </React.Fragment>
          )}
        </div>
      ))}
      {props.editMode ? (
        <AccountEditButtons
          editMode={props.editMode}
          save={(e) => handleSave(e)}
          cancel={() => props.cancel()}
        />
      ) : (
        <AccountEditButtons editMode={false} setEdit={() => props.setEdit()} />
      )}
    </AccordionDetails>
  );
}

AccountDetails.propTypes = {
  editMode: PropTypes.bool,
  details: PropTypes.object,
  cancel: PropTypes.func,
  setEdit: PropTypes.func,
};

export default AccountDetails;
