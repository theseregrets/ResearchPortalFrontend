import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import updateContacts from '../../Redux/Actions/updateContacts';
import updateDept from '../../Redux/Actions/updateDept';

export default function EditAcadDetails() {
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        required
        label="Phone Number"
        defaultValue={state.contacts}
        variant="outlined"
        onChange={(e) => dispatch(updateContacts(e.target.value))}
      />
      <TextField
        required
        label="Department"
        defaultValue={state.department}
        variant="outlined"
        onChange={(e) => dispatch(updateDept(e.target.value))}
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
