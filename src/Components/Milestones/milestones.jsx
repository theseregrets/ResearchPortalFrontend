import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Carousel from './Carousel'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  achievements:{
      color: 'white'
  }
}));

export default function Milestones() {
  const classes = useStyles();

  return (
      <div>
        <div className="container" >
            <Carousel />
        </div>
        <div className="container" style={{marginTop:'5vh'}} >
        <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
            <Typography variant="body2" className={classes.achievements}>
                Achievement 1
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Achievement 1
                </Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
            <Typography variant="body2" className={classes.achievements}>
                Achievement 2
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Achievement 2
                </Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="body2" className={classes.achievements}>
                Achievement 3
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Achievement 3
                </Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="body2" className={classes.achievements}>
                Achievement 4
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Achievement 4
                </Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
    </div>
      </div>
  );
}
