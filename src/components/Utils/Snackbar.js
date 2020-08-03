import React from "react";
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} action={null} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

/**
 * React Component to Display Alert Messages depending on severity.
 * 
 * @param {*} props From Parent Component 
 * @property {String} severity can be selected from {"success", "error", "info", "warning"}
 * @property {String} message Message to be displayed
 * @property {func} onExited Function to perform when the snackbar has exited
 */
export default function AlertSnackbar(props) {
  const classes = useStyles();
  const storeState = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClose = () => {dispatch({type: "HIDE_SNACKBAR"})};

  return (
    <div className={classes.root}>
      <Snackbar open={storeState.snackbar} autoHideDuration={2000} onClose={handleClose} onExited={props.onExited}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

AlertSnackbar.propTypes = {
  severity: PropTypes.string,
  message: PropTypes.string,
  onExited: PropTypes.func
}
