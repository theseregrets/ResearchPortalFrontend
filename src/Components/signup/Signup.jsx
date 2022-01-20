/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable prefer-promise-reject-errors */
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
  let [error, setError] = useState('');
  let [alert, setAlert] = useState(false);
  // eslint-disable-next-line
  let [backDrop, setBackDrop] = useState(false);
  let dispatch = useDispatch();
  const [data, setData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password2: '',
  });

  function validator() {
    return new Promise((resolve, reject) => {
      const exp = RegExp('w+@btech.nitdgp.ac.in|nitdgp.ac.in').test(data.email);
      if (!exp) {
        reject('Email Not Valid! Please use Institute Email ID');
      } else if (data.password === '' || data.password !== data.password2) {
        reject('Password Does Not Match!');
      } else {
        setAlert(false);
        resolve();
      }
    });
  }

  const onSignup = (e) => {
    e.preventDefault();
    validator()
      .then(() => {
        // console.log('API Request Sent');
        dispatch(feedback('backdrop'));
        fetch('https://ieeenitdgp.pythonanywhere.com/api/user/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(async (res) => ({ data: await res.json(), status: res.status }))
          .then(({ data, status }) => {
            // console.log(data);
            // console.log(status);
            if (status === 400) {
              if (data.email) {
                setAlert(true);
                setError(data.email[0]);
              }
            }
            dispatch(feedback(''));
            if (data.username) {
              history.push('/login');
            } else {
              console.log(data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setAlert(true);
      });
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
      <form className={classes.form}>
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="User Name"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, username: event.target.value }))
          }
        />
        <TextField
          required
          type="email"
          className={classes.field}
          id="outlined-required"
          label="Email"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="First Name"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, first_name: event.target.value }))
          }
        />
        <TextField
          required
          className={classes.field}
          id="outlined-required"
          label="Last Name"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, last_name: event.target.value }))
          }
        />
        <TextField
          required
          type="password"
          className={classes.field}
          id="outlined-required"
          label="Password"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <TextField
          required
          type="password"
          className={classes.field}
          id="outlined-required"
          label="Confirm Password"
          variant="outlined"
          onChange={(event) =>
            setData((prev) => ({ ...prev, password2: event.target.value }))
          }
        />
        <Button
          className={classes.field}
          color="primary"
          variant="contained"
          onClick={(e) => onSignup(e)}
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
