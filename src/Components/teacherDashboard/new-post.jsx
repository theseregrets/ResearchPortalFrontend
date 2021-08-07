/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(10),
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '100ch',
    },
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  input: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '30ch',
      },
      '& > *': {
        margin: theme.spacing(3),
      },
    },
    group: {
      width: '30ch',
    },
  },
  group: {
    display: 'flex',
    width: '100ch',
    padding: theme.spacing(3),
    '& > p': {
      flexGrow: '1',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const Status = [
  {
    value: 'published',
    label: 'published',
  },
  {
    value: 'draft',
    label: 'draft',
  },
  {
    value: '',
    label: null,
  },
];

export default function NewPost() {
  const classes = useStyles();
  const history = useHistory();
  const state = useSelector((state) => state.profile);
  const [is_active, setChecked] = useState(true);
  const [status, setstatus] = useState('published');
  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [tags, settags] = useState(null);

  function upload() {
    const data = {
      title,
      status,
      is_active,
      description,
      tags,
    };

    fetch(`https://ieeenitdgp.pythonanywhere.com/api/projects/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.jwt}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Cancel
        </Button>
        <div>
          <TextField
            id="outline-basic"
            label="Title"
            placeholder="Add title to your project"
            multiline
            onChange={(event) => settitle(event.target.value)}
          />
          <TextField
            id="outline-basic"
            label="Tags"
            placeholder="Add the skills required"
            multiline
            onChange={(event) => settags(event.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            placeholder="add a brief description about your project"
            variant="outlined"
            onChange={(event) => {
              setdescription(event.target.value);
            }}
          />
          <div className={classes.group}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={is_active}
                  onChange={(event) => {
                    setChecked(event.target.checked);
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label="is-Active"
            />
            <p />
            <TextField
              select
              label="status"
              value={status}
              onChange={(event) => {
                setstatus(event.target.value);
              }}
              helperText="Please select the status"
            >
              {Status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={() => {
                upload();
              }}
            >
              Upload
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
