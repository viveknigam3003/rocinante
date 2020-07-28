import React from "react";
import { Route } from "react-router-dom";
import Landing from "../components/Common/Landing";
import { refreshToken } from "../components/Utils/Tokens";
import { authTokensPresent } from "../components/Utils/User";
import { useAuth } from "../components/Authentication/AuthContext";

function AppLayout() {
  const { setAuthToken } = useAuth();
  const authTokens = authTokensPresent()

  React.useEffect(() => {
    try {
      setInterval(() => {
        refreshToken();
        setAuthToken(authTokens);
        console.log(`Token Refreshed! ${Date()}` );
      }, 58 * 60 * 1000);
    } catch (e) {
      console.log(e);
    }
  }, [setAuthToken, authTokens]);

  return (
    <React.Fragment>
        <Route
          path="/app/explore"
          component={() => <Landing page="Explore" />}
        />
        <Route
          path="/app/storage"
          component={() => <Landing page="Storage" />}
        />
        <Route
          path="/app/settings"
          component={() => <Landing page="Settings" />}
        />
    </React.Fragment>
  );
}

export default AppLayout;
