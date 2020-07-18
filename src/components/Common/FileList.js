import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { lsFolder } from "../Utils/Files";
import FileIcons from "./FileIcons";

const useStyles = makeStyles({
  root: {
    height: "80%",
    width: "100%",
    padding: 12,
    margin: 12,
  },
  container: {
    maxHeight: "100%",
  },
});

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "type", label: "Type", minWidth: 100 },
];

function FileList() {
  const classes = useStyles();
  const entrypoint = "/home/vivek/Desktop/";
  const [cd, setCd] = useState(entrypoint);
  const [rows, setRows] = useState([]);
  let key = 0;

  React.useEffect(() => {
    lsFolder(entrypoint).then((res) => setRows(res.data));
  }, [entrypoint]);

  function renderFileList(folder) {
    return lsFolder(cd + "/" + folder).then((res) => {
      setRows(res.data);
      setCd(cd + "/" + folder);
    });
  }

  return (
    <Paper variant="outlined" id="file-list" className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={++key}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        onClick={() => renderFileList(row.name)}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FileIcons type={row.type} rowValue={value}/>
                          {value}
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default FileList;
