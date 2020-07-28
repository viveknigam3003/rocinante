import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, makeStyles, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogDelete from "./DialogDelete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
  },
}));

function ServerConfigEditForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    // Process Delete Request.then(setOpen(false))
    setOpen(false);
  };

  return (
    <form className={classes.root}>
      <TextField
        id="option"
        size="small"
        disabled
        defaultValue={props.option}
      />
      <TextField
        size="small"
        id="option-value"
        defaultValue={props.optionValue}
      />
      <IconButton onClick={() => setOpen(true)}>
        <DeleteIcon fontSize="small" color="secondary" />
      </IconButton>
      <DialogDelete
        open={open}
        option={props.option}
        section={props.section}
        server={props.server}
        handleClose={handleClose}
      />
    </form>
  );
}

ServerConfigEditForm.propTypes = {
  option: PropTypes.string,
  optionValue: PropTypes.any,
  onClick: PropTypes.func,
  server: PropTypes.string,
  section: PropTypes.string,
};

export default ServerConfigEditForm;
