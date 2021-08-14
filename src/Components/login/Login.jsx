/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import login from '../../Redux/Actions/login';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: '10px auto',
    backgroundColor: 'green',
  },
  noAccount: {
    textAlign: 'center',
    marginTop: '20px',
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
}));

export default function Login() {
  const history = useHistory();
  const [value, setValue] = React.useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = {};
  function setData(event, key) {
    data[key] = event.target.value;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const onLogin = () => {
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
          history.push('/');
        } else {
          alert(data.detail);
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
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="Username"
          variant="outlined"
          onChange={(event) => {
            setData(event, 'username');
          }}
        />
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="Password"
          variant="outlined"
          onChange={(event) => {
            setData(event, 'password');
          }}
        />
        <Button
          type="submit"
          className={classes.field}
          color="secondary"
          variant="contained"
          onClick={() => onLogin()}
        >
          Login
        </Button>
      </form>
      <Typography variant="h6" className={classes.noAccount}>
        Don't have an account?
        <span>
          <Link to="/signup">Signup</Link>
        </span>
      </Typography>
    </Paper>
  );
}
