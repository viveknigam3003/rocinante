import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  editBtn: {
    margin: 20,
    marginTop: 0,
    marginRight: 10,
  },
});

function AccountEditButtons(props) {
  const classes = useStyles();
  switch (props.editMode) {
    case true:
      return (
        <ButtonGroup className={classes.editBtn}>
          <Button onClick={props.save} color="primary" variant="outlined">
            Save
          </Button>
          <Button onClick={props.cancel} color="secondary" variant="outlined">
            Cancel
          </Button>
        </ButtonGroup>
      );
    default:
      return (
        <div>
          <Button
            onClick={props.setEdit}
            size="small"
            color="primary"
            variant="outlined"
            className={classes.editBtn}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            className={classes.editBtn}
          >
            Delete Account
          </Button>
        </div>
      );
  }
}

AccountEditButtons.propTypes = {
  setEdit: PropTypes.func,
  save: PropTypes.func,
  cancel: PropTypes.func,
  editMode: PropTypes.bool,
};

export default AccountEditButtons;
