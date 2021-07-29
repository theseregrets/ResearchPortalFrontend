import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProjectCard from './cards';

import NewPost from './new-post';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
    textAlign: 'center',
  },
  projects: {
    display: 'block',
    margin: '0px auto',
  },
}));

const Posts = () => {
  const [createPost, setCreatePost] = useState(false);
  const classes = useStyles();

  function handleClick() {
    setCreatePost(!createPost);
  }

  function handleCancel() {
    setCreatePost(false);
  }

  return (
    <>
      <div className={classes.root}>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddCircleIcon />}
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
          <div className={classes.projects}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
