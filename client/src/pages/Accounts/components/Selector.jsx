import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function Selector({ label, value, setValue, selectList }) {
  const entries = Object.entries(selectList);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={`select-${label}`}>{label}</InputLabel>
      <Select labelId={`select-${label}`} id={`select-${label}`} value={value} label={label} onChange={setValue}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {entries.map(item => (<MenuItem value={item[0]}>{item[1]}</MenuItem>))}
      </Select>
    </FormControl>
  )
}

export default Selector;