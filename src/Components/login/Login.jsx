/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/core/Alert';
import login from '../../Redux/Actions/login';
import feedback from '../../Redux/Actions/feedback';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: '10px auto',
    backgroundColor: 'green',
  },
  noAccount: {
    textAlign: 'center',
    marginTop: '1px',
  },
  forgetpass: {
    textAlign: 'center',
    marginTop: '20px',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
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
    margin: '1rem auto',
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
  alert: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
}));

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [userEvent, setUserEvent] = useState('');
  const [passEvent, setPassEvent] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    const data = { username, password };

    dispatch(feedback('backdrop'));
    fetch('https://ieeenitdgp.pythonanywhere.com/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          console.log(data);
          dispatch(login(data));
          dispatch(feedback('snackbar'));
          history.push('/');
        } else {
          console.log(data);
          dispatch(feedback(''));
          setError(data.detail);
          userEvent.value = null;
          passEvent.value = null;
          setPassword('');
          setUsername('');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper className={classes.paper} elevation={5}>
      <Avatar className={clsx(classes.align, classes.avatar)}>
        <LockOpenIcon />
      </Avatar>
      <Typography variant="h3" align="center">
        Login
      </Typography>
      {error !== '' && (
        <Alert className={classes.alert} variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="Username"
          variant="outlined"
          onChange={(event) => {
            setUsername(event.target.value);
            setUserEvent(event.target);
          }}
        />
        <TextField
          required
          type="password"
          className={classes.field}
          id="outlined-required"
          label="Password"
          variant="outlined"
          onChange={(event) => {
            setPassword(event.target.value);
            setPassEvent(event.target);
          }}
        />
        <Button
          type="submit"
          className={classes.field}
          color="secondary"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <Typography variant="h6" className={classes.noAccount}>
        Don't have an account?
        <span>
          <Link to="/signup"> Signup</Link>
        </span>
      </Typography>
      <Typography variant="h6" color="primary" className={classes.noAccount}>
        <a href="https://ieeenitdgp.pythonanywhere.com/reset_password/">
          Forgot password ?
        </a>
      </Typography>
    </Paper>
  );
}
