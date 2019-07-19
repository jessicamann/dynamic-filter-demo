import React from "react";
import Table from "@material-ui/core/Table";
import { TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";

export default function FruitsTable({ fruits }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>Country</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fruits.map(({ name, color, country }, index) => (
          <TableRow key={name + index}>
            <TableCell>{name}</TableCell>
            <TableCell>{color}</TableCell>
            <TableCell>{country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
