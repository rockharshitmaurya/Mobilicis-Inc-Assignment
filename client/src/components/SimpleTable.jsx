import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DataTable = ({ data }) => {
  let generateHeader = () => {
    let headers = [];
    for (let key in data[0]) {
      if (key != "_id" && key != "__v")
        headers.push(
          <TableCell align="center" key={key}>
            {key}
          </TableCell>
        );
    }
    return headers;
  };

  let generateRow = (obj) => {
    let cells = [];
    for (let [key, value] of Object.entries(obj)) {
      if (key != "_id" && key != "__v")
        cells.push(
          <TableCell key={key} align="center">
            {value}
          </TableCell>
        );
    }
    return cells;
  };

  return (
    data && (
      <TableContainer component={Paper}>
        <div className="table-container">
          <Table aria-label="simple table">
            <TableHead sx={{backgroundColor:"#ececec"}}>
              <TableRow>{generateHeader()}</TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>{generateRow(row)}</TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    )
  );
};

export default DataTable;
