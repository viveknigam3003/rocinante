import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import PropTypes from "prop-types";
import { IconButton, makeStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

function EditButtons(props) {
  const classes = useStyles();

  switch (props.editMode) {
    case true:
      return (
        <div>
          <IconButton className={classes.iconBtn} onClick={props.confirmEdit}>
            <DoneIcon fontSize="inherit" color="primary" />
          </IconButton>
          <IconButton className={classes.iconBtn} onClick={props.cancelEdit}>
            <CloseIcon fontSize="inherit" color="secondary" />
          </IconButton>
        </div>
      );
    default:
      return (
        <div>
          <IconButton className={classes.iconBtn} onClick={props.onClick}>
            <EditIcon color="action" fontSize="inherit" />
          </IconButton>
        </div>
      );
  }
}

const useStyles = makeStyles({
  iconBtn: {
    fontSize: "inherit",
    right: 0,
  },
});

EditButtons.propTypes = {
  editMode: PropTypes.bool,
  onClick: PropTypes.func,
  cancelEdit: PropTypes.func,
  confirmEdit: PropTypes.func
};

export default EditButtons;
