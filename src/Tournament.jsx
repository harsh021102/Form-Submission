import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Tournament({formdata,setFormData}) {

  const handleStartDateAndTime =(event)=>{
    setFormData({
      ...formdata, startDateAndTime: event
    })
  }
  const handleEndDateAndTime =(event)=>{
    setFormData({
      ...formdata, endDateAndTime: event
    })
  }
  const handleMatchLocation =(event)=>{
    setFormData({
      ...formdata, matchLocation: event.target.value
    })
  }
  const handleComments =(event)=>{
    setFormData({
      ...formdata, comments: event.target.value
    })
  }
  const handleTournamentName =(event)=>{
    setFormData({
      ...formdata, tournamentName: event.target.value
    })
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="grid grid-cols-2 grid-rows-10 gap-4 mx-28 mt-10">
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Start Date and Time"
        value={formdata.startDateAndTime}
        onChange={handleStartDateAndTime}
      />
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="End Date and Time"
        value={formdata.endDateAndTime}
        onChange={handleEndDateAndTime}
      />
      <TextField
        id="outlined-basic" 
        label="Match Location" 
        variant="outlined" 
        value={formdata.matchLocation}
        onChange={handleMatchLocation}/>
      <TextField
          className='col-start-2 row-start-2 row-span-6'
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={10}
          value={formdata.comments}
          onChange={handleComments}
        />
      <TextField 
        id="outlined-basic" 
        label="Tournament Name" 
        variant="outlined" 
        value={formdata.TournamentName}
        onChange={handleTournamentName}/>
      </div>
    </LocalizationProvider>
  );
}
