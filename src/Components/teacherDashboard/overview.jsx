import React, { useState } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NewPost from './new-post';
import ProjectCard from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
    '& > *': {
      margin: theme.spacing(3),
    },
    textAlign: 'center',
  },
  msg: {
    margin: 'auto',
    display: 'flex',
    width: '50%',
    padding: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  txt: {
    marginLeft: '50px',
  },
  btn: {
    display: 'block',
    margin: '30px auto',
    width: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    msg: {
      width: '90%',
    },
    txt: {
      marginLeft: '25px',
      fontSize: '20px',
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    btn: {
      margin: '0px auto',
      display: 'block',
      width: '50%',
      padding: '15px',
    },
  },
}));

export default function Overview() {
  const classes = useStyles();
  const [createPost, setCreatePost] = useState(false);

  function handleClick() {
    setCreatePost(!createPost);
  }

  function handleCancel() {
    setCreatePost(false);
  }

  return (
    <div className={classes.root}>
      <div className={classes.msg}>
        <Avatar className={clsx(classes.orange, classes.large)}>R</Avatar>
        <h4 className={classes.txt}>Welcome back!</h4>
      </div>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<AddCircleIcon />}
        className={classes.btn}
      >
        {' '}
        Create New Post{' '}
      </Button>
      {createPost ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancel}
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <NewPost />
        </>
      ) : (
        <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      )}
    </div>
  );
}
