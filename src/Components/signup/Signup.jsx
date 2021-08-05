/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    height: '100vh',
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
  form: {
    width: '40vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const data = {};
  function setData(event, key) {
    data[key] = event.target.value;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

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
          history.push('/login');
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
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="User Name"
          variant="outlined"
          onChange={(event) => setData(event, 'username')}
        />
        <TextField
          required
          type="email"
          className={classes.field}
          id="outlined-required"
          label="Email"
          variant="outlined"
          onChange={(event) => setData(event, 'email')}
        />
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="First Name"
          variant="outlined"
          onChange={(event) => setData(event, 'first_name')}
        />
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="Last Name"
          variant="outlined"
          onChange={(event) => setData(event, 'last_name')}
        />
        <TextField
          required
          type="password"
          className={classes.field}
          id="outlined-required"
          label="Password"
          variant="outlined"
          onChange={(event) => setData(event, 'password')}
        />
        <TextField
          required
          type="password"
          className={classes.field}
          id="outlined-required"
          label="Confirm Password"
          variant="outlined"
          onChange={(event) => setData(event, 'password2')}
        />
        <Button
          type="submit"
          className={classes.field}
          color="primary"
          variant="contained"
          onClick={() => {
            onSignup();
          }}
        >
          Sign Up
        </Button>
      </form>
      <h5 style={{ textAlign: 'center', marginTop: '20px' }}>
        Already have an account?{' '}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </h5>
    </Paper>
  );
}
