import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import Statement from './Statement';
import rstatement from '../../Redux/Actions/statement';
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
  btnContainer: {
    display: 'flex',
    width: '65%',
    justifyContent: 'space-between',
    margin: '20px auto',
  },
  editBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
    marginLeft: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    btnContainer: {
      width: '90%',
    },
  },
}));

export default function ResearchStatement() {
  const classes = useStyles();
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  function update() {
    const data = {
      research_statement: state.research_statement,
      status: 'published',
    };

    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/user/student/rs/update/${state.username}/`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.jwt}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  }
  function cancel() {
    setIsEditing(false);
  }

  useEffect(() => {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/user/student/rs/update/${state.username}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.research_statement) {
          dispatch(rstatement(data.research_statement));
          console.log(data);
        } else {
          fetch(
            `https://ieeenitdgp.pythonanywhere.com/api/user/student/rs/create/`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${state.jwt}`,
                'Content-Type': 'application/json',
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Research Statement
      </Typography>
      <div className={classes.btnContainer}>
        {!isEditing ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.editBtn}
            onClick={handleClick}
          >
            <UpdateIcon />
            Edit
          </Button>
        ) : (
          <></>
        )}
        {isEditing ? (
          <div className={classes.editBtnContainer}>
            <Button variant="contained" color="primary" onClick={update}>
              Update
            </Button>
            <Button variant="contained" color="primary" onClick={cancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <div />
        )}
      </div>
      <Statement ie={isEditing} text={state.research_statement} />
    </div>
  );
}
