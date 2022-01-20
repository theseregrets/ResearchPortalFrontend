/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectCard from './ProjectCard';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '60vh',
    flex: '1',
    '& a': {
      '&:hover': {
        color: 'white',
      },
    },
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
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  txt: {
    marginLeft: '50px',
  },
  title: {
    marginTop: '50px',
    textAlign: 'center',
    color: colors.headingLight,
  },
  btn: {
    display: 'block',
    margin: '20px auto',
    width: 'max-content',
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
  },
  placeholderText: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function MainDashboard() {
  const classes = useStyles();
  const state = useSelector((state) => state.profile);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (projects == null) {
      fetch(`https://ieeenitdgp.pythonanywhere.com//api/projects/applied-to/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.msg}>
        {/* <Avatar className={clsx(classes.purple, classes.large)}>NK</Avatar> */}
        <Typography variant="h5">Welcome Back {state.first_name}</Typography>
      </div>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Projects Applied
      </Typography>
      <Button
        component={Link}
        to="/projects"
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        <AddIcon />
        Apply for more
      </Button>
      {projects ? (
        <div>
          {projects.length ? (
            projects.map((ele) => (
              <ProjectCard
                project={ele.title}
                desc={ele.description}
                faculty={
                  ele.teacher.user.first_name + ele.teacher.user.last_name
                }
                identity={ele.slug}
                setProjects={setProjects}
              />
            ))
          ) : (
            <Typography className={classes.placeholderText}>
              You have not applied to any project
            </Typography>
          )}
        </div>
      ) : (
        <div className={classes.placeholderText}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}
