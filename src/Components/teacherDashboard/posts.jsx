import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ProjectCard from './cards';
import NewPost from './new-post';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
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
        <Button onClick={handleClick} variant="contained" color="primary">
          {' '}
          Create New Post{' '}
        </Button>
        {createPost ? (
          <>
            <Button variant="contained" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <NewPost />
          </>
        ) : (
          <>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </>
        )}
      </div>
    </>
  );
};

export default Posts;
