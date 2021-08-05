import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export default function EditAcadDetails() {
  const state = useSelector((state) => state);

  return (
    <>
      <TextField
        required
        label="Phone Number"
        type="number"
        defaultValue={state.contacts}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        required
        label="Department"
        defaultValue={state.department}
        variant="outlined"
      />
      <TextField
        required
        label="Qualification"
        defaultValue="lorem"
        variant="outlined"
      />
    </>
  );
}
