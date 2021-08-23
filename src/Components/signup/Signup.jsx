/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
import { colors } from '../theme/Theme';
import feedback from '../../Redux/Actions/feedback';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: '10px auto',
    backgroundColor: 'green',
  },
  paper: {
    width: '50vw',
    margin: '1rem auto 3rem auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  align: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  field: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15px',
  },
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const dispatch = useDispatch();
  const data = {};
  function setData(event, key) {
    data[key] = event.target.value;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const validator = () => {
    const exp = RegExp('w+@btech.nitdgp.ac.in|nitdgp.ac.in').test(data.email);
    if (!exp) {
      setError('Email Not Valid! Please use Institute Email ID');
    } else {
      setError('');
    }
    if (data.password !== data.password2) {
      setError('Password Does Not Match!');
    } else {
      setError('');
    }
  };

  const onSignup = () => {
    if (error === '') {
      validator();
      dispatch(feedback('backdrop'));
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
            dispatch(feedback(''));
            history.push('/login');
          } else {
            console.log(data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setAlert(true);
    }
  };

  return (
    <Paper className={classes.paper} elevation={5}>
      <Avatar className={clsx(classes.align, classes.avatar)}>
        <LockOpenIcon />
      </Avatar>
      <Typography variant="h3" align="center">
        Sign Up
      </Typography>
      {alert && <Alert severity="error">{error}</Alert>}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
          onChange={(event) => {
            setData(event, 'email');
          }}
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
          onChange={(event) => {
            setData(event, 'password2');
          }}
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
