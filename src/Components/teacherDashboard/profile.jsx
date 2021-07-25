import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    textAlign: 'center',
    padding: '10px',
  },
  profile: {
    width: '80%',
    margin: '20px auto',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  photo: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',

    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  pic: {
    flexWrap: 'wrap',
    gap: '10px',
    '& > img': {
      height: '200px',
      width: '200px',
    },
    '& Button': {
      alignSelf: 'flex-end',
    },
  },
  editBtn: {
    alignSelf: 'flex-start',
    width: '75px',
    // margin: '0 auto',
  },
  editBtnContainer: {
    gap: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100px',
  },
  text: {
    display: 'block',
  },
  info: {
    display: 'flex',
    justifyContent: '',
    gap: '20px',
    marginTop: '50px',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    profile: {
      width: '95%',
    },
    pic: {
      '& > img': {
        height: '125px',
        width: '125px',
      },
    },
    info: {
      flexWrap: 'wrap',
      gap: '40px',
    },
  },
}));

export default function Profile() {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);

  const [n, sn] = useState(localStorage.getItem('name') || '');
  const [p, sp] = useState(localStorage.getItem('phno') || '');
  const [e, se] = useState(localStorage.getItem('email') || '');
  const [c, sc] = useState(localStorage.getItem('clg') || '');
  const [s, ss] = useState(localStorage.getItem('sem') || '');
  const [cg, scg] = useState(localStorage.getItem('cgpa') || '');

  function handleClick() {
    setIsEditing(!isEditing);
  }

  function handleChange(evt) {
    const inp = document.querySelectorAll('input');
    switch (evt.target) {
      case inp[0]:
        sn(inp[0].value);
        break;
      case inp[1]:
        sp(inp[1].value);
        break;
      case inp[2]:
        se(inp[2].value);
        break;
      case inp[3]:
        sc(inp[3].value);
        break;
      case inp[4]:
        ss(inp[4].value);
        break;
      case inp[5]:
        scg(inp[5].value);
        break;
      default:
        break;
    }
  }

  function update() {
    const inp = document.querySelectorAll('input');
    localStorage.setItem('name', inp[0].value);
    localStorage.setItem('phno', inp[1].value);
    localStorage.setItem('email', inp[2].value);
    localStorage.setItem('clg', inp[3].value);
    localStorage.setItem('sem', inp[4].value);
    localStorage.setItem('cgpa', inp[5].value);
    setIsEditing(false);
  }
  function cancel() {
    setIsEditing(false);
  }

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Profile</h2>
      <div className={classes.profile}>
        <div className={classes.photo}>
          <div className={classes.pic}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"
              alt="profile"
            />
            <Button size="small" variant="contained" color="primary" onClick="">
              Upload
            </Button>
          </div>
          <div className={classes.editBtn}>
            {!isEditing ? (
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <UpdateIcon />
                Edit
              </Button>
            ) : (
              <div className={classes.editBtnContainer}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={update}
                >
                  Update
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={cancel}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.infoContainer}>
            <h4>Basic details</h4>
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Name"
              defaultValue={n}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              id={isEditing ? 'outlined-number' : 'outlined-read-only-input'}
              label="Phone Number"
              type="number"
              defaultValue={p}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
            />
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Email"
              defaultValue={e}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
            />
          </div>

          <div className={classes.infoContainer}>
            <h4>Academic details</h4>
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="College"
              defaultValue={c}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
            />
            <TextField
              required
              id={isEditing ? 'outlined-number' : 'outlined-read-only-input'}
              label="Semester"
              type="number"
              defaultValue={s}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
            />
            <TextField
              required
              id={isEditing ? 'outlined-number' : 'outlined-read-only-input'}
              label="CGPA"
              type="number"
              defaultValue={cg}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
