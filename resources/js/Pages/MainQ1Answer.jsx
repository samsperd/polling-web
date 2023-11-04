import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Homepage from '../Components/Homepage';
import { Typography } from '@mui/material';


const MainQ1Answer = (props) => {
    const { pollingUnitResults, pollingUnit, lga } = props

    console.log(pollingUnit, pollingUnitResults);
  return (
    <Homepage>
        <Typography>
            These are the results from the <b>{pollingUnit?.polling_unit_name}</b> polling unit in <b>{lga?.lga_name}</b> Local Government
        </Typography>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='font-bold'>Party Abbreviation</TableCell>
          <TableCell className='font-bold' align="right">Party Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pollingUnitResults.map((pollingUnitResult) => (
          <TableRow
            key={pollingUnitResult.result_id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {pollingUnitResult.party_abbreviation}
            </TableCell>
            <TableCell align="right">{pollingUnitResult.party_score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Homepage>
  )
}

export default MainQ1Answer