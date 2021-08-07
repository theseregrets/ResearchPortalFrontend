/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import updateContacts from '../../Redux/Actions/updateContacts';
import updateDept from '../../Redux/Actions/updateDept';
import { Branches } from '../../Data/branch';

export default function EditAcadDetails(props) {
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        required
        label="Phone Number"
        defaultValue={state.contacts}
        variant="outlined"
        onChange={(e) => props.setContact(e.target.value)}
      />
      <TextField
        select
        label="Select"
        value={state.branch}
        helperText="Please select your Branch"
        variant="outlined"
        onChange={(e) => {
          props.setBranch(e.target.value);
        }}
      >
        {Branches.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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
