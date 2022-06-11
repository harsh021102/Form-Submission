import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Friendly({formdata,setFormData}) {
    const handleTeamName1 =(event)=>{
        setFormData({
          ...formdata, team1: event.target.value
        })
      }
    const handleTeamName2 =(event)=>{
        setFormData({
          ...formdata, team2: event.target.value
        })
      }
    const handleHomeOrAway1 =(event)=>{
        setFormData({
          ...formdata, teamOne: event.target.value
        })
      }
    const handleHomeOrAway2 =(event)=>{
        setFormData({
          ...formdata, teamTwo: event.target.value
        })
      }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="grid grid-cols-5 grid-row-2 gap-8 mx-28 mt-10">
        <TextField 
        className='col-start-1 col-span-2'
        id="outlined-basic" 
        label="Team 1 Name" 
        variant="outlined" 
        value={formdata.team1}
        onChange={handleTeamName1}
        />
        <FormControl sx={{ minWidth:'100%', minHeight: '1rem'}} size="small" className='col-start-4 col-span-2 border-b-2 border-black'>
              <InputLabel id="demo-select-small" sx={{py:'0.5rem'}}>Match Type</InputLabel>
              <Select
                sx={{py: '0.5rem'}}
                labelId="demo-select-small"
                id="demo-select-small"
                label="Home or Away"
                value={formdata.teamOne} onChange={handleHomeOrAway1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Away">Away</MenuItem>
              </Select>
        </FormControl>
        <div className='col-start-1 col-span-2 bg-slate-500 h-1 my-4'></div>
        <div className='col-start-3 col-span-1 text-center text-xl'>VS</div>
        <div className='col-start-4 col-span-2 bg-slate-500 h-1 my-4'></div>
        <TextField 
        className='col-start-1 col-span-2 border-b-2 border-black'
        id="outlined-basic" 
        label="Team 2 Name" 
        variant="outlined" 
        value={formdata.team2}
        onChange={handleTeamName2}
        />
        <FormControl sx={{ minWidth:'100%', minHeight: '1rem'}} size="small" className='col-start-4 col-span-2 border-b-2 pt-8 border-black'>
              <InputLabel id="demo-select-small" sx={{py:'0.5rem'}}>Match Type</InputLabel>
              <Select
                sx={{py: '0.5rem'}}
                labelId="demo-select-small"
                id="demo-select-small"
                label="Home or Away"
                value={formdata.teamTwo} onChange={handleHomeOrAway2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Away">Away</MenuItem>
              </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
