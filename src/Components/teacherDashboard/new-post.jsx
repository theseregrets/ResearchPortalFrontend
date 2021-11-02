/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '20px',
    '& .MuiTextField-root': {
      width: '100%',
      maxWidth: '800px',
      margin: '24px auto',
    },
    '& > *': {
      margin: theme.spacing(3),
      textAlign: 'center',
    },
  },
  inner: {
    padding: '2rem 3rem',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    width: 'fit-content',
    margin: '0 auto',
    boxShadow: theme.shadows[colors.shadows.createProject],
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },
  input: {
    display: 'none',
  },
  group: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
    padding: theme.spacing(3),
    '& > p': {
      flexGrow: '1',
    },
    '& .MuiTextField-root': {
      maxWidth: '25ch',
      margin: '24px auto',
    },
    '& > *': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  [theme.breakpoints.down('xs')]: {
    inner: {
      margin: '0',
    },
  },
}));

export default function NewPost() {
  const classes = useStyles();
  const history = useHistory();
  const state = useSelector((state) => state.profile);
  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [tags, settags] = useState(null);
  const [open, setOpen] = useState(false);

  function upload() {
    const data = {
      title,
      status: 'published',
      is_active: true,
      description,
      tags,
    };

    if (state.department === '') {
      console.log('Please update your profile first');
      alert('Please update your profile first');
      // <Snackbar
      //   open={true}
      //   autoHideDuration={2000}
      //   anchorOrigin={{
      //     vertical: 'bottom',
      //     horizontal: 'right',
      //   }}
      //   onClose={setOpen(false)}
      // >
      // <Alert severity="error" onClose={setOpen(false)} sx={{ width: '100%' }}>
      //   Please update your profile first.
      // </Alert>
      // </Snackbar>;
    } else {
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
        <div className={classes.inner}>
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
            label="Background Knowledge"
            multiline
            rows={3}
            placeholder="Add a brief description of the background knowledge required for the project"
            variant="outlined"
            onChange={(event) => {
              setdescription(event.target.value);
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            placeholder="Add a brief description about your project"
            variant="outlined"
            onChange={(event) => {
              setdescription(event.target.value);
            }}
          />

          <TextField
            id="outlined-multiline-static"
            label="Tasks"
            multiline
            rows={3}
            placeholder="Add a brief task for students to work on"
            variant="outlined"
            onChange={(event) => {
              setdescription(event.target.value);
            }}
          />

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
