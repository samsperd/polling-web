import React, { useState } from 'react'
import { 
    Stack,
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Box, 
    Typography} from '@mui/material';
import Homepage from '../Components/Homepage';
import { useForm } from '@inertiajs/inertia-react';
import { round } from 'lodash';


const Q3Page = (props) => {
    const { lgas, pollings, parties } = props

    const { post, processing, data, setData } = useForm({
        pollingUnit: '',
        polParty: '',
        votes: '',
        by: ''
    })

    const filteredPollings = pollings.filter(obj => obj.polling_unit_number !== '');
    console.log(parties);


    const [punt, setPunt] = useState('')
    const [party, setParty] = useState('')
    const [voteCount, setVoteCount] = useState('')
    const [enteredBy, setEnteredBy] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        data.polParty = party
        data.votes = voteCount
        data.pollingUnit = punt
        data.by = enteredBy

        post('/submit', data)
    }
    
  return (
    <Homepage>
        <Box>
            <Typography>
                This Page is answers the No. 3 Question on the Task Doc
            </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack direction={'column'} width={'100%'}>
                {/* <Box>
                    <Box>
                        <Typography> Please select the local government of the polling unit </Typography>
                    </Box>
                    <FormControl fullWidth>
                            <InputLabel id="lga">LGA</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="LGA"
                            req
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                    </FormControl>

                </Box>
                <hr /> */}

                    <hr />
                <Box>
                    <Box>
                        <Typography variant="subtitle2"> Select the polling unit </Typography>
                    </Box>
                
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Polling Unit</InputLabel>
                            <Select
                            labelId="demo-punt-select-label"
                            id="demo-punt-select"
                            value={punt}
                            required
                            label="Polling Unit"
                            onChange={(event) => setPunt(event.target.value)}
                            >
                            {filteredPollings.map((poll) => (
                                <MenuItem key={poll?.uniqueid} value={poll?.uniqueid}>{poll?.polling_unit_name}</MenuItem>

                            ))}
                            </Select>

                    </FormControl>
                </Box>
                <hr />

                <Box>
                    <Box>
                        <Typography variant="subtitle2"> Select Party </Typography>
                    </Box>

                <FormControl fullWidth>
                        <InputLabel id="demo-party-select-label">Party</InputLabel>
                        <Select
                        labelId="demo-party-select-label"
                        id="demo-party-select"
                        value={party}
                        required
                        label="Party"
                        onChange={(event) => setParty(event.target.value)}
                        >
                            {parties.map((pollParty) => (
                                <MenuItem key={pollParty?.id} value={pollParty?.partyid}>{pollParty?.partyname}</MenuItem>

                            ))}

                        </Select>

                </FormControl>
                </Box>
                <hr />

                <Box>
                        <Typography variant="subtitle2"> Party Score </Typography>
                    </Box>
                <TextField value={voteCount} onChange={(e) => setVoteCount(e.target.value) } id="outlined-basic" required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Votes? (Only numbers)" variant="outlined" />

                <hr />

                <Box>
                        <Typography variant="subtitle2"> By whom? </Typography>
                    </Box>
                <TextField value={enteredBy} onChange={(e) => setEnteredBy(e.target.value) } id="outlined-party" required label="Data Entered By?" variant="outlined" />

                <hr />
                <input type="submit" value="Submit" />
            </Stack>
        </form>
    </Homepage>

  )
}

export default Q3Page