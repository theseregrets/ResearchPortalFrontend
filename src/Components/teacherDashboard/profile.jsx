import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import EditDetails from './EditAcadDetails';
import Details from './AcadDetails';
import cont from '../../Redux/Actions/updateContacts';
import dept from '../../Redux/Actions/updateDept';
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
    boxShadow: theme.shadows[4],
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
  const [branch, setbranch] = useState(null);
  const [contact, setcontact] = useState(null);

  useEffect(() => {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/user/teacher/details/${state.username}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // store the user detail in redux.
        dispatch(cont(data.contact));
        dispatch(dept(data.branch));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function update() {
    const formdata = new FormData();
    let isSomethingEdited = false;

    if (contact) {
      formdata.append('contact', contact);
      isSomethingEdited = true;
    }
    if (branch) {
      formdata.append('branch', branch);
      isSomethingEdited = true;
    }
    if (isSomethingEdited) {
      fetch(
        `https://ieeenitdgp.pythonanywhere.com/api/user/teacher/details/${state.username}/`,
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
          setbranch(null);
          setcontact(null);
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
            <Button size="small" variant="contained" color="primary" onClick="">
              Upload
            </Button>
          </div>
          <div className={classes.editBtn}>
            {!isEditing ? (
              <div>
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
              </div>
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
            <Typography variant="h5" gutterBottom>
              Basic details
            </Typography>
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Username"
              value={state.username}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Firstname"
              value={state.first_name}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              required
              id={isEditing ? 'outlined-required' : 'outlined-read-only-input'}
              label="Lastname"
              value={state.last_name}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
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
            <Typography variant="h5" gutterBottom>
              Academic details
            </Typography>
            {isEditing ? (
              <EditDetails setBranch={setbranch} setContact={setcontact} />
            ) : (
              <Details />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
