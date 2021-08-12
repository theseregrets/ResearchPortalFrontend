import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export default function AcadDetails() {
  const state = useSelector((state) => state.profile);

  return (
    <>
      <TextField
        required
        id="outlined-number"
        label="Phone Number"
        value={state.contacts}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: false,
        }}
        variant="outlined"
      />
      <TextField
        label="Department"
        value={state.department}
        variant="filled"
        InputProps={{
          readOnly: false,
        }}
      />
      <TextField
        disabled
        required
        label="Qualification"
        defaultValue="lorem"
        variant="outlined"
      />
    </>
  );
}
