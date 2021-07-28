/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

export default function NewPost() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outline-basic"
            label="Title"
            placeholder="Add title to your project"
            multiline
          />
          <TextField
            id="outline-basic"
            label="Skills"
            placeholder="Add the skills required"
            multiline
          />

          <TextField
            id="outline-basic"
            label="Eligibility"
            placeholder="Add eligibility for your project"
            multiline
          />

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            placeholder="add a brief description about your project"
            variant="outlined"
          />
          <div className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
