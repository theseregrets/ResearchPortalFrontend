import React from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AnimatedNumber from 'react-animated-number';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: colors.headingLight,
  },
  paragraph: {
    padding: '20px',
    margin: '2rem 2rem',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    boxShadow: theme.shadows[4],
    borderRadius: '10px',
  },
  animatedNumber: {
    transition: '0.8s ease-out',
    color: colors.primary,
    fontWeight: '600',
    fontSize: '3rem',
    textAlign: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '20px 1rem',
    margin: '4rem auto',
    background: colors.gradients.contactCard,
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      margin: '4 rem auto',
    },
  },
  align: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  desc: {
    padding: '10px',
  },
  [theme.breakpoints.down('xs')]: {
    counter: {
      border: '0',
    },
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid container>
      <Grid container justify="center" alignItems="center" margin="auto">
        <Grid item xs={12}>
          <Typography
            className={classes.heading}
            gutterBottom
            variant="h3"
            align="center"
          >
            About Us
          </Typography>
        </Grid>
        <div className={classes.paragraph}>
          <Grid item xs={12} style={{ padding: '20px' }}>
            <Typography variant="body" className={classes.desc}>
              The IEEE Student Branch , NIT Durgapur is a society of enthusiasts
              aimed at promoting research-related activities in the campus. We
              are a direct handshake to IEEE, an international body that allows
              countless young researchers the opportunity to present & publish
              their innovations every year. Comprising of bright researchers,
              developers, speakers, and other contributors we are a society that
              welcomes in the era of better research prospects, on the campus.
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4} align="center">
              <Box borderRight={smallScreen ? 0 : 0.1}>
                <AnimatedNumber
                  className={classes.animatedNumber}
                  stepPrecision={0}
                  duration={1000}
                  value={50}
                  formatValue={(n) => `${n} +`}
                />
                <Typography variant="p" component="p" gutterBottom>
                  Branch Members
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Box borderRight={smallScreen ? 0 : 0.1}>
                <AnimatedNumber
                  className={classes.animatedNumber}
                  stepPrecision={0}
                  duration={1000}
                  value={30}
                  formatValue={(n) => `${n} +`}
                />

                <Typography variant="p" component="p" gutterBottom>
                  Events and Workshops
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Box>
                <AnimatedNumber
                  className={classes.animatedNumber}
                  stepPrecision={0}
                  duration={1000}
                  value={500}
                  formatValue={(n) => `${n} +`}
                />

                <Typography variant="p" component="p" gutterBottom>
                  Participants
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid container>
        <Paper className={classes.paper} elevation={4}>
          <Typography gutterBottom variant="h5" align="center">
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
            gutterBottom
          >
            Fill up the form and our team will get back to you...
          </Typography>
          <form>
            <Grid container spacing={1} className={classes.align}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Enter last name"
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={8}
                  placeholder="Type your message here"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8} className={classes.align}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
