import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import ApplicationTable from './table';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    margin: '60px',
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

    table: {
      fontSize: '8px',
    },
  },
}));

export default function ProjectDetail() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.subtitle}>
          Applications
        </Typography>
        <ApplicationTable />
      </Container>
    </>
  );
}
