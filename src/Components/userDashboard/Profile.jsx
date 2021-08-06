/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Branches } from '../../Data/branch';
import FileDropzone from './Dropzone';
import cv from '../../Redux/Actions/cv';
import cont from '../../Redux/Actions/updateContacts';
import dept from '../../Redux/Actions/updateDept';
import cgpa from '../../Redux/Actions/cgpa';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    textAlign: 'center',
    padding: '10px',
    color: 'white',
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
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [branch, setbranch] = useState('default');
  const [cgpa, setcgpa] = useState(null);
  const [contact, setContact] = useState(null);
  const [file, setfile] = useState(null);

  useEffect(() => {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/user/student/details/${state.username}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(cv(data));
        dispatch(cont(data.contact));
        dispatch(dept(data.branch));
        dispatch(cgpa(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  function update() {
    const formdata = new FormData();
    let isSomethingEdited = false;
    if (file && file.length) {
      formdata.append('cv', file[0]);
      isSomethingEdited = true;
    }
    if (cgpa) {
      formdata.append('cgpa', cgpa);
      isSomethingEdited = true;
    }
    if (contact) {
      formdata.append('contact', contact);
      isSomethingEdited = true;
    }
    if (branch !== 'default') {
      formdata.append('branch', branch);
      isSomethingEdited = true;
    }
    console.log(isSomethingEdited);

    if (isSomethingEdited) {
      fetch(
        `https://ieeenitdgp.pythonanywhere.com/api/user/student/details/${state.username}/`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${state.jwt}`,
          },
          body: formdata,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // new changed data is comming store it in redux;
          console.log(data);
          setbranch('default');
          setcgpa(null);
          setfile(null);
          setContact(null);
          setIsEditing(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('you have not changed anything');
    }
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
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                uploadData();
              }}
            >
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
              value={state.first_name + state.last_name}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              required
              id={isEditing ? 'outlined-number' : 'outlined-read-only-input'}
              label="Phone Number"
              value={state.contacts}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
              onChange={(event) => {
                setContact(event.target.value);
              }}
            />
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Email"
              value={state.email}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          </div>

          <div className={classes.infoContainer}>
            <h4>Academic details</h4>
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="College"
              value="NIT Durgapur"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            {/* <TextField
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
            /> */}
            <TextField
              required
              id={isEditing ? 'outlined-number' : 'outlined-read-only-input'}
              label="CGPA"
              value={state.cgpa}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
              variant="outlined"
              onChange={(event) => {
                setcgpa(event.target.value);
              }}
            />
            <TextField
              select
              label="Select"
              value={state.department}
              helperText="Please select your Branch"
              variant="outlined"
              onChange={(event) => {
                setbranch(event.target.value);
              }}
              InputProps={{
                readOnly: !isEditing,
              }}
            >
              {Branches.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <h4>Resume</h4>
          <FileDropzone
            setFile={(file) => {
              setfile(file);
            }}
            Edit={isEditing}
          />
        </div>
      </div>
    </div>
  );
}
