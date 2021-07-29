/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: '10px',
    backgroundColor: 'green',
  },
  paper: {
    width: '50vw',
    margin: 'auto',
    marginBottom: '3rem',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      margin: 'auto',
      height: '90vh',
    },
  },
  align: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  field: {
    width: '40vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '40px',
    },
  },
}));

export default function Signup() {
  const classes = useStyles();
  const data = {};
  function getData(event, key) {
    data[key] = event.target.value;
  }

  const onSignup = () => {
    fetch('https://ieeenitdgp.pythonanywhere.com/api/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) {
          alert('registered succesfully');
        } else {
          alert('registration failed');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper className={classes.paper} elevation={2}>
      <Avatar className={clsx(classes.align, classes.avatar)}>
        <LockOpenIcon />
      </Avatar>
      <Typography variant="h3" align="center">
        Sign Up
      </Typography>
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="User Name"
        variant="outlined"
        onChange={(event) => getData(event, 'username')}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Email"
        variant="outlined"
        onChange={(event) => getData(event, 'email')}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="First Name"
        variant="outlined"
        onChange={(event) => getData(event, 'first_name')}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Last Name"
        variant="outlined"
        onChange={(event) => getData(event, 'last_name')}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Password"
        variant="outlined"
        onChange={(event) => getData(event, 'password')}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Confirm Password"
        variant="outlined"
        onChange={(event) => getData(event, 'password2')}
      />
      <Button
        className={classes.field}
        color="primary"
        variant="contained"
        onClick={() => {
          onSignup();
        }}
      >
        Sign Up
      </Button>
    </Paper>
  );
}
