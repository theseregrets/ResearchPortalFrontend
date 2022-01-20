import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectCard from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
    textAlign: 'center',
    width: '100%',
  },
  projects: {
    display: 'block',
    width: '100%',
    margin: '0px auto',
  },
  loading: {
    textColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Posts = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.profile);
  const [projects, setProjects] = useState(null);

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
        setProjects(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.projects}>
        {projects ? (
          <div>
            {projects.length ? (
              projects.map((ele) => (
                <ProjectCard
                  key={ele.id}
                  project={ele.title}
                  desc={ele.description}
                  slug={ele.slug}
                />
              ))
            ) : (
              <Typography style={{ color: 'white' }} variant="h5">
                You have not published any projects
              </Typography>
            )}
          </div>
        ) : (
          <div className={classes.loading}>
            <CircularProgress color="inherit" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
