import React, { useState } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NewPost from './new-post';
import ProjectCard from './cards';
import { colors } from '../theme/Theme';

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
    backgroundColor: colors.msgBg,
    borderRadius: '10px',
    boxShadow: theme.shadows[colors.shadows.msg],
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
    width: '30%',
  },
  [theme.breakpoints.down('sm')]: {
    msg: {
      width: '80%',
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
      width: '80%',
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
        <Typography variant="p" className={classes.txt}>
          Welcome back!
        </Typography>
      </div>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        size="medium"
        className={classes.btn}
      >
        {' '}
        <AddCircleIcon />
        Create New Project{' '}
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
