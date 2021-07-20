import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import Statement from './Statement';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    marginTop: '50px',
    textAlign: 'center',
    padding: '10px',
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

  let [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(isEditing ? false : true);
  }

  let [text, setText] = useState(localStorage.getItem('statement') || 'hello');

  function update() {
    let ta = document.querySelector('textarea');
    localStorage.setItem('statement', ta.value);
    setText(ta.value);
    setIsEditing(false);
  }
  function cancel() {
    setIsEditing(false);
  }

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Research statement</h2>
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
          <div></div>
        )}
      </div>
      <Statement ie={isEditing} text={text} />
    </div>
  );
}
