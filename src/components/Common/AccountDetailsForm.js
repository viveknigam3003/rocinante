import React from "react";
import PropTypes from "prop-types";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
      height: "1ch"
    },
    display: "flex",
  },
}));

function AccountDetailsForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField id="option" size="small" disabled defaultValue={props.keyValue} />
      <TextField size="small" id="option-value" defaultValue={props.value} />
    </form>
  );
}

AccountDetailsForm.propTypes = {
  keyValue: PropTypes.string,
  value: PropTypes.any,
};

export default AccountDetailsForm;
