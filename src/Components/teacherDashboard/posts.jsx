import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const [createProject, setCreateProject] = useState(false);
  const classes = useStyles();
  const state = useSelector((state) => state.profile);

  useEffect(() => {
    fetch(`https://ieeenitdgp.pythonanywhere.com/api/projects/my-projects/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // store the user detail in redux.
        // setProjects(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick() {
    setCreateProject(!createPost);
  }

  function handleCancel() {
    setCreateProject(false);
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
          Create New Project{' '}
        </Button>
        {createProject ? (
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
