import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UpdateIcon from '@material-ui/icons/Update';
import EditDetails from './EditAcadDetails';
import Details from './AcadDetails';

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
  const state = useSelector((state) => state);
  const [isEditing, setIsEditing] = useState(false);

  function update() {
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
              <>
                <p />
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => setIsEditing(true)}
                  color="primary"
                >
                  <UpdateIcon />
                  Edit
                </Button>
              </>
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
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.infoContainer}>
            <h1>Basic details</h1>
            <h4>Username: {state.username}</h4>
            <h4>First Name: {state.first_name}</h4>
            <h4>Last Name: {state.last_name}</h4>
            <h4>Email: {state.email}</h4>
          </div>
          <div className={classes.infoContainer}>
            <h1>Academic details</h1>
            {isEditing ? <EditDetails /> : <Details />}
          </div>
        </div>
      </div>
    </div>
  );
}
