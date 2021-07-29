/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import GoogleButton from 'react-google-button';
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
    height: '70vh',
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

export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  const data = {};
  function getData(event, key) {
    data[key] = event.target.value;
  }

  const onLogin = () => {
    fetch('https://ieeenitdgp.pythonanywhere.com/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
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
        Login
      </Typography>
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Username"
        variant="outlined"
        onChange={(event) => {
          getData(event, 'username');
        }}
      />
      <TextField
        required
        className={classes.field}
        id="outlined-required"
        label="Password"
        variant="outlined"
        onChange={(event) => {
          getData(event, 'password');
        }}
      />
      <Button
        className={classes.field}
        color="secondary"
        variant="contained"
        onClick={() => onLogin()}
      >
        Login
      </Button>
      <Button
        className={classes.field}
        color="primary"
        variant="contained"
        component={Link}
        to="/signup"
      >
        Sign Up
      </Button>
    </Paper>
  );
}
