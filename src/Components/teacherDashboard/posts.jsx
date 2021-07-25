import React from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ProjectCard from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Button
        component={Link}
        to={`${url}/new-post`}
        className={classes.button}
        onClick={() => {
          setishome(false);
        }}
      >
        New Post
      </Button>
      <div className={classes.root}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Posts;
