import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MilestonesTimeline from './MilestonesTimeline';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    // background:
    //   'linear-gradient(to bottom, #fff 0%, #e9f0f5 25%,#e9f0f5 75% ,#fff 100%)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      overflowX: 'hidden',
    },
  },
  logo: {
    borderRadius: '50%',
    background: '#fff',
    border: 'solid 2px #4499fe',
    top: '10%',
    left: '47.5%',
    margin: '4% auto 0 auto',
    zIndex: 5,
    position: 'sticky',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function Milestones() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item align="center" spacing={1} xs={12}>
        <h1>Milestones</h1>
      </Grid>
      <Carousel />
      <FaDotCircle className={classes.logo} />
      <MilestonesTimeline />
    </Grid>
  );
}
