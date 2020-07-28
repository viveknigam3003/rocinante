import React from "react";
import PropTypes from "prop-types";
import { TextField, makeStyles, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex"
  },
}));

function ServerConfigEditForm(props) {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField id="option" size="small" disabled defaultValue={props.option} />
      <TextField
        size="small"
        id="option-value"
        defaultValue={props.optionValue}
      />
      <IconButton onClick={props.onClick}>
        <DeleteIcon fontSize="small" color="secondary"/>
      </IconButton>
    </form>
  );
}

ServerConfigEditForm.propTypes = {
  option: PropTypes.string,
  optionValue: PropTypes.any,
  onClick: PropTypes.func
};

export default ServerConfigEditForm;
