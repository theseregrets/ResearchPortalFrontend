import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { projects } from '../../Data/projects';
import { data } from '../../Data/project-data';
import ApplicationTable from './table';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 14%',
  },
  title: {
    fontSize: '34px',
    textAlign: 'center',
    color: '#0047ab',
    fontStyle: 'italic',
    margin: '30px',
  },
  summary: {
    margin: '30px 0px',
    fontStyle: 'italic',
  },
  subtitle: {
    marginTop: '60px',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sop: {
    width: '600px',
    minHeight: '400px',
    overflow: 'auto',
  },

  numApp: { color: 'darkblue', fontStyle: 'italic' },
  [theme.breakpoints.down('sm')]: {
    container: {
      padding: '5%',
    },
    title: {
      fontSize: '23px',
      margin: '10px',
    },
    table: {
      fontSize: '8px',
    },
  },
}));

export default function ProjectDetail() {
  const classes = useStyles();
  const { slug } = useParams();
  const state = useSelector((state) => state.profile);

  useEffect(() => {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/projects/applied/${slug}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // store the user detail in redux.
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete Project
        </Button>
        <Typography variant="h3" gutterBottom className={classes.title}>
          {data.title}
        </Typography>
        <hr />
        <h4>Summary</h4>

        <p className={classes.summary}>{data.project}</p>
        <hr />
        <h4 style={{ margin: '30px 0px' }}>Description</h4>
        <p>{data.desc}</p>
        <hr />
        <h2 className={classes.subtitle}>Applications</h2>
        <h4 className={classes.numApp}>
          {projects.length} students have applied
        </h4>
        <ApplicationTable />
      </Container>
    </>
  );
}
