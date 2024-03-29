import React from 'react';
import Table from '@material-ui/core/Table';
import { TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';

export default function CarsTable({ cars }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Make</TableCell>
          <TableCell>Model</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cars.map(({ id, make, model }, index) => (
          <TableRow key={make + index}>
            <TableCell>{id}</TableCell>
            <TableCell>{make}</TableCell>
            <TableCell>{model}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
