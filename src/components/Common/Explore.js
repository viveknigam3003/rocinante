import React from "react";
import { Breadcrumbs, makeStyles } from "@material-ui/core";
import FileList from "./FileList";
import DIDMeta from "./DIDMeta";

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
  const cd = "/home/vivek/Desktop/GSoC_2020/rocinante";
  let key = 0;

  /**
   * Returns an array with folder names as elements.
   * @param {String} cdString String from command `pwd` OR Present working directory string
   * @example
   * Input: "/home/user/Desktop"
   * Output: ["home", "user", "Desktop"]
   */
  function cdToArray(cdString) {
    return cdString.split("/").splice(1);
  }

  return (
    <React.Fragment>
      <Breadcrumbs
        className={classes.Breadcrumbs}
        maxItems={3}
        aria-label="files"
      >
        {cdToArray(cd).map((item) => (
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
