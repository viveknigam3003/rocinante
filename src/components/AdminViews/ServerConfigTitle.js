import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DialogNewSection from "./DialogNewSection";
import { addConfig } from "../Utils/Config";
import { useDispatch, useSelector } from "react-redux";
import AlertSnackbar from "../Utils/Snackbar";

const useStyles = makeStyles({
  title: {
    fontFamily: "Cern",
    fontWeight: 500,
    fontSize: 14,
    color: "#000000",
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function ServerConfigTitle(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");
  const [option, setOption] = useState("");
  const [value, setValue] = useState();
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addConfig(props.server, {
      section: section,
      option: option,
      value: value,
    })
      .then((res) =>
        res.status === 200
          ? dispatch({ type: "SUCCESS" })
          : dispatch({ type: "SERVER_ERR" })
      )
      .then(setOpen(false))
      .then(() => dispatch({ type: "SHOW_SNACKBAR" }));
  };

  function validateInput() {
    return section.length > 0 && option.length > 0;
  }

  return (
    <div id="title" className={classes.title}>
      <span style={{ opacity: 0.5 }}>Config</span>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon fontSize="inherit" color="primary" />
      </IconButton>
      <DialogNewSection
        setSection={setSection}
        setOption={setOption}
        setValue={setValue}
        disabled={!validateInput()}
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      {status === 200 ? (
        <AlertSnackbar message="New Section Added!" severity="success" />
      ) : (
        <AlertSnackbar
          message="Error occured while adding section"
          severity="error"
        />
      )}
    </div>
  );
}

ServerConfigTitle.propTypes = {
  server: PropTypes.string,
};

export default ServerConfigTitle;
