import React from "react";
import AlertSnackbar from "../Utils/Snackbar";

function LoginSnackbar(props) {
  switch (props.status) {
    case 200:
      return (
        <AlertSnackbar
          open={true}
          severity="success"
          message="Signed in to Rucio"
        />
      );
    case 401:
      return (
        <AlertSnackbar
          open={true}
          severity="error"
          message="Invalid Credentials"
        />
      );
    case 500:
      return (
        <AlertSnackbar
          open={true}
          severity="error"
          message="Connection Error"
        />
      );
    default:
      return <div />;
  }
}

export default LoginSnackbar;
