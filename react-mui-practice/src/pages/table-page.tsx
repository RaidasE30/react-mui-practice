import React from 'react';
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

const tableData = [
  {
    id: 1,
    first_name: 'Leona',
    last_name: 'Payler',
    email: 'lpayler0@prlog.org',
    gender: 'Female',
    ip_address: '123.44.198.69',
  }, {
    id: 2,
    first_name: 'Vasilis',
    last_name: 'Huddles',
    email: 'vhuddles1@ihg.com',
    gender: 'Male',
    ip_address: '79.20.213.8',
  }, {
    id: 3,
    first_name: 'Patti',
    last_name: 'Cersey',
    email: 'pcersey2@smh.com.au',
    gender: 'Female',
    ip_address: '74.133.243.47',
  }, {
    id: 4,
    first_name: 'Ferris',
    last_name: 'Suggate',
    email: 'fsuggate3@blogger.com',
    gender: 'Male',
    ip_address: '177.180.56.117',
  }, {
    id: 5,
    first_name: 'Elnar',
    last_name: 'Tythe',
    email: 'etythe4@msn.com',
    gender: 'Polygender',
    ip_address: '97.70.104.120',
  }, {
    id: 6,
    first_name: 'Geno',
    last_name: 'Linkleter',
    email: 'glinkleter5@google.fr',
    gender: 'Male',
    ip_address: '45.245.123.108',
  }, {
    id: 7,
    first_name: 'Glory',
    last_name: 'Clingan',
    email: 'gclingan6@usda.gov',
    gender: 'Female',
    ip_address: '4.116.53.180',
  }, {
    id: 8,
    first_name: 'Mathew',
    last_name: 'Lebreton',
    email: 'mlebreton7@zimbio.com',
    gender: 'Male',
    ip_address: '228.202.31.243',
  }, {
    id: 9,
    first_name: 'Haley',
    last_name: 'Sciusscietto',
    email: 'hsciusscietto8@arstechnica.com',
    gender: 'Male',
    ip_address: '184.133.225.159',
  }, {
    id: 10,
    first_name: 'Mina',
    last_name: 'Rubberts',
    email: 'mrubberts9@hud.gov',
    gender: 'Female',
    ip_address: '125.119.142.227',
  },
];

const TablePage = () => (
  <Box m={6}>
    <TableContainer component={Paper} />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell align="center">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </Box>
);

export default TablePage;
