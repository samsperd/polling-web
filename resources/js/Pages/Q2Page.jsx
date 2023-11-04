import React, { useState } from 'react'
import Homepage from '../Components/Homepage'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


const Q2Page = (props) => {
    console.log(props);
    const { lgas } = props
   
    const [selected, setSelected] = useState(0)
    const [currentTotal, setCurrentTotal] = useState(0)

    const handleChange = async(event) => {
        if (event.target.value === 0) {
            return
        }
        const data = await fetch('/api/q2fetch/'+ event.target.value).then((response) => response.json())
        setCurrentTotal(data?.total)
      setSelected(event.target.value);
    };

    return (
    <Homepage>
          <Box>
            <Typography>
              This is the answer to the Second ( No.2 ) Question
            </Typography>
          </Box>

    <Box>
        <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={"space-around"}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">LGAs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="LGA(s)"
          onChange={handleChange}
        >
            <MenuItem key={0} value={0}>Please Select a Local Government</MenuItem>
            {lgas.map((lga) => (
                <MenuItem key={lga?.uniqueid} value={lga?.lga_id}>{lga?.lga_name}</MenuItem>

            ))}
        </Select>
      </FormControl>
    </Box>
            <DemoPaper square={false}>
                <Typography className='font-bold'>Summed Total Result</Typography>
                <hr />
                <Typography>
                    { currentTotal === 0 ? "Not Recorded" : currentTotal}
                </Typography>
            </DemoPaper>
        </Stack>

    </Box>

    </Homepage>
  )
}

export default Q2Page