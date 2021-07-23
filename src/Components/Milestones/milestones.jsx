<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MilestonesTimeline from "./MilestonesTimeline";
import Carousel from "./Carousel";
import { Grid } from "@material-ui/core"
import { FaDotCircle } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
	root: {
		//background gradient
		background:
			"linear-gradient(to bottom, #fff 0%, #e9f0f5 25%,#e9f0f5 75% ,#fff 100%)",
	},
	logo: {
		borderRadius: "50%",
		background: "#fff",
		border: "solid 2px #4499fe",
		top: "10%",
		left: "47.5%",
		margin: "4% auto 0 auto",
		zIndex: 5,
		position: "sticky",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
=======
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
import Carousel from './Carousel';
import Car from './car';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  achievements: {
    color: 'white',
  },
>>>>>>> upstream/master
}));

export default function Milestones() {
	const classes = useStyles();

<<<<<<< HEAD
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
=======
  return (
    <div>
      <h1 className="display-5 text-center ">Milestones</h1>
      <div className="container">
        <Car />
      </div>
      <div className="container" style={{ marginTop: '5vh' }}>
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
>>>>>>> upstream/master
}
