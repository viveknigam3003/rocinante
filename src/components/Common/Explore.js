import React from "react";
import { Breadcrumbs, makeStyles } from "@material-ui/core";
import FileList from "./FileList";
import DIDMeta from "./DIDMeta";
import { cdToArray } from "../Utils/Files";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  Breadcrumbs: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  content: {
    width: `calc(100% - 48px)`,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 2,
    margin: 1,
  },
});

const didMetadata = {
  account: "vivek",
  name: "newDataset",
  created_at: "2020-04-13 15:39:02",
  did_type: "DATASET",
  scope: " newScope",
  updated_at: " 2020-04-13 15:39:02",
  availability: "AVAILABLE",
  monotonic: "false",
  bytes: "null",
  is_open: "true",
};

function Explore() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  let key = 0;

  return (
    <React.Fragment>
      <Breadcrumbs
        className={classes.Breadcrumbs}
        maxItems={3}
        aria-label="files"
      >
        {cdToArray(state.directory).map((item) => (
          <div key={++key}>{item}</div>
        ))}
      </Breadcrumbs>
      <div id="explore-content" className={classes.content}>
        <FileList />
        <DIDMeta
          icon={didMetadata.did_type}
          did={didMetadata.name}
          meta={didMetadata}
        />
      </div>
    </React.Fragment>
  );
}

export default Explore;
