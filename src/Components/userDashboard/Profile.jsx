/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/School';
import EmailIcon from '@material-ui/icons/Email';
import { useSelector, useDispatch } from 'react-redux';
import { Branches } from '../../Data/branch';
import FileDropzone from './Dropzone';
import cv from '../../Redux/Actions/cv';
import cont from '../../Redux/Actions/updateContacts';
import dept from '../../Redux/Actions/updateDept';
import cg from '../../Redux/Actions/cgpa';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    textAlign: 'center',
    padding: '10px',
    color: colors.headingLight,
  },
  profile: {
    width: '80%',
    margin: '20px auto',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: theme.shadows[colors.shadows.profile],
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
    width: '100px',
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
    marginTop: '5px',
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
  const [branch, setbranch] = useState(state.department);
  const [cgpa, setcgpa] = useState(state.cgpa);
  const [semester, setSemester] = useState(state.semester);
  const [contact, setContact] = useState(state.contacts);
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
        dispatch(cv(data.cv));
        dispatch(cont(data.contact));
        dispatch(dept(data.branch));
        dispatch(cg(data.cgpa));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (cgpa !== state.cgpa) setIsEditing(true);
    if (branch !== state.department) setIsEditing(true);
    if (semester !== state.semester) setIsEditing(true);
    if (contact !== state.contacts) setIsEditing(true);

    if (
      cgpa === state.cgpa &&
      branch === state.branch &&
      semester === state.semester &&
      contact === state.contacts
    )
      setIsEditing(false);
  });

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

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Profile
      </Typography>
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
            {isEditing && (
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={update}
              >
                <UpdateIcon />
                Update
              </Button>
            )}
          </div>
        </div>
        <Typography
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="h5"
        >
          DETAILS
        </Typography>
        <div className={classes.info}>
          <div className={classes.infoContainer}>
            <TextField
              required
              label="Username"
              value={state.username}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <div style={{ display: 'flex' }}>
              <AccountCircleIcon fontSize="large" />
              <Typography
                variant="h5"
                style={{ marginLeft: '1vw' }}
              >{`${state.first_name} ${state.last_name}`}</Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <EmailIcon fontSize="large" />
              <Typography style={{ marginLeft: '1vw' }} variant="h5">
                {state.email}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <SchoolIcon fontSize="large" />
              <Typography style={{ marginLeft: '1vw' }} variant="h6">
                National Institute of Technology Durgapur
              </Typography>
            </div>
          </div>

          <div className={classes.infoContainer}>
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
              label="Phone Number"
              value={contact}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(event) => {
                setContact(event.target.value);
              }}
            />
            <TextField
              select
              label="Semester"
              value={semester}
              variant="outlined"
              onChange={(event) => {
                setSemester(event.target.value);
              }}
            >
              {[...Array(8).keys()].map((a) => (
                <MenuItem key={a + 1} value={a + 1}>
                  {a + 1}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="CGPA"
              value={cgpa}
              variant="outlined"
              onChange={(event) => {
                setcgpa(event.target.value);
              }}
            />
            <TextField
              select
              label="Branch"
              value={branch}
              variant="outlined"
              onChange={(event) => {
                setbranch(event.target.value);
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
          <Typography variant="h5">Resume</Typography>
          <FileDropzone
            setFile={(file) => {
              setfile(file);
            }}
            cv={state.cv}
          />
        </div>
      </div>
    </div>
  );
}
