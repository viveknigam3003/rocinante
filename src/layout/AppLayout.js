import React from "react";
import { Route } from "react-router-dom";
import Landing from "../components/Common/Landing";

function AppLayout(props) {
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
