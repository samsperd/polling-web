import * as React from 'react';
import { Box, Link, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Homepage from '../Components/Homepage';



export default function Q1Table(props) {
    const { pollings } = props;
    // console.log(pollings);
    
    const filteredPollings = pollings.filter(obj => obj.polling_unit_number !== '');
    console.log(filteredPollings);


    return (
        <Homepage>

        <Box>
            <Typography variant='h5'>Response to Question 1</Typography>
            <Typography>
                This page list all the polling units in a table of 10 rows per pagination.
                To go to the page that displays the result of each individual polling unit, click on the pol
            </Typography>
            <Box>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='font-bold'>Polling Unit</TableCell>
            <TableCell align="right" className='font-bold'>LGA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPollings.map((pollingUnit) => (
              <TableRow
              key={pollingUnit.uniqueid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell className='capitalize' component="th" scope="row">
              <Link href={'/polling_unit/'+pollingUnit.uniqueid} underline="hover">
                {pollingUnit?.polling_unit_name}
                </Link>
              </TableCell>
              <TableCell align="right">{ pollingUnit?.lga?.lga_name }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            </Box>
        </Box>

        </Homepage>
    );
  }
  