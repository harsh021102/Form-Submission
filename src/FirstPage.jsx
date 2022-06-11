import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react'

function FirstPage({formdata,setFormData}) {

    const handleMatchType = (event) =>{
        setFormData({
            ...formdata, matchType: event.target.value
        })
    }
    return (
          <div className='mt-10 outline-none flex justify-center h-96'>
            <div className=" w-8/12">
              <div className=" flex justify-center mb-3 w-full">
              <FormControl sx={{ m: 1, minWidth:'65%', minHeight: '1rem' }} size="small">
              <InputLabel id="demo-select-small" sx={{py:'0.5rem'}}>Match Type</InputLabel>
              <Select
                sx={{py: '0.5rem'}}
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
                value={formdata.matchType} onChange={handleMatchType}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Friendly">Friendly</MenuItem>
                <MenuItem value="Tournament">Tournament</MenuItem>
              </Select>
            </FormControl>
            </div>
          </div>
        </div>
  )
}

export default FirstPage