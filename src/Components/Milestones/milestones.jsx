import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MilestonesTimeline from './MilestonesTimeline';
import Carousel from './Carousel';
import { colors } from '../theme/Theme';

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
    top: '15%',
    left: '47.5%',
    margin: '4% auto 0 auto',
    zIndex: 5,
    position: 'sticky',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  heading: {
    color: colors.headingLight,
  },
}));

export default function Milestones() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item align="center" xs={12}>
        <Typography variant="h3" gutterBottom className={classes.heading}>
          Milestones
        </Typography>
      </Grid>
      <Carousel />
      <FaDotCircle className={classes.logo} />
      <MilestonesTimeline />
    </Grid>
  );
}
