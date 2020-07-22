import React from "react";
import { Route } from "react-router-dom";
import Landing from "../components/Common/Landing";
import { refreshToken } from "../components/Utils/Tokens";
import { authTokensPresent } from "../components/Utils/User";
import { useAuth } from "../components/Authentication/AuthContext";

function AppLayout(props) {
  const { setAuthToken } = useAuth();

  React.useEffect(() => {
    try {
      setInterval(() => {
        refreshToken();
        setAuthToken(authTokensPresent());
        console.log("Token Refreshed!");
      }, 58 * 60 * 1000);
    } catch (e) {
      console.log(e);
    }
  }, [setAuthToken]);

  return (
    <React.Fragment>
      <Route
        path="/app/explore"
        component={() => <Landing page="Explore" view={props.viewContext} />}
      />
      <Route
        path="/app/storage"
        component={() => <Landing page="Storage" view={props.viewContext} />}
      />
    </React.Fragment>
  );
}

export default AppLayout;
