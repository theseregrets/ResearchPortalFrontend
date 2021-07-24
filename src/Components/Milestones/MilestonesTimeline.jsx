import React, { useEffect } from 'react';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import aos from 'aos';
import 'aos/dist/aos.css';
import chatHead from '../../Assets/triangle_timeline.png';
import { TIMELINE_CONTENTS } from '../../Data/timeline';

const useStyles = makeStyles((theme) => ({
  timeline: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '4% 0',
    },
  },
  oppositeContentLeft: {
    transform: 'translate(-5% , 5%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  oppositeContentRight: {
    transform: 'translate(5% ,5%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  time: {
    color: '#4499fe',
    fontWeight: 'bold',
  },
  left: {
    height: '20px',
    filter: 'invert(100%)',
    transform: 'rotate(180deg) translate(2rem,0)',
    margin: '0px',
    padding: '0px',
  },
  right: {
    height: '20px',
    filter: 'invert(100%)',
    transform: ' translate(2rem,0)',
    margin: '0px',
    padding: '0px',
  },
  paper: {
    backgroundColor: 'linear-gradient',
    borderRadius: '8px',
    height: '100%',
    minHeight: '20rem',
    margin: 'auto 2rem',
    padding: '6px 16px',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'linear-gradient',
      borderRadius: '8px',
      maxHeight: '10rem',
      minHeight: '20rem',
      margin: 'auto 2rem',
      padding: '6px 16px',
      overflowY: 'scroll',
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  spacing: {
    marginBottom: '10rem',
  },
  title: {
    textDecoration: 'underline',
    marginBottom: '1rem',
  },
  body: {
    padding: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
}));

export default function MilestonesTimeline() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  const animationDirection = (index) => {
    if (index % 2 === 0) {
      return 'fade-right';
    }
    return 'fade-left';
  };
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  if (smallScreen) {
    return (
      <Timeline className={classes.timeline}>
        {TIMELINE_CONTENTS.map((slide, index) => (
          <TimelineItem>
            <TimelineOppositeContent
              className={
                index % 2 === 0
                  ? classes.oppositeContentLeft
                  : classes.oppositeContentRight
              }
            >
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.time}
              >
                {slide.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" data-aos="fade-in" />
              <TimelineConnector data-aos="fade-down" />
            </TimelineSeparator>
            <TimelineContent data-aos="fade-right">
              <Paper elevation={5} className={classes.paper}>
                <img
                  src={chatHead}
                  alt="chatHead"
                  className={index % 2 === 0 ? classes.left : classes.right}
                />
                <Typography
                  align="center"
                  className={classes.title}
                  variant="h4"
                  component="p"
                >
                  {slide.title}
                </Typography>
                <Typography
                  align="center"
                  className={classes.body}
                  variant="body"
                  component="body"
                >
                  {slide.body}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
  return (
    <Timeline align="alternate" className={classes.timeline}>
      {TIMELINE_CONTENTS.map((slide, index) => (
        <TimelineItem>
          <TimelineOppositeContent
            data-aos={animationDirection(index)}
            className={
              index % 2 === 0
                ? classes.oppositeContentLeft
                : classes.oppositeContentRight
            }
          >
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.time}
            >
              {slide.time}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator data-aos="fade-down">
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos={animationDirection(index)}>
            <Paper elevation={5} className={classes.paper}>
              <img
                src={chatHead}
                alt="chatHead"
                className={index % 2 === 0 ? classes.left : classes.right}
              />
              <Typography
                align="center"
                className={classes.title}
                variant="h4"
                component="p"
              >
                {slide.title}
              </Typography>
              <Typography
                align="center"
                className={classes.body}
                variant="body"
                component="body"
              >
                {slide.body}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
