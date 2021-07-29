/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './homepage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import introsvg from '../../Assets/illustration.svg';
import Profile from '../team/profile.png';

const useStyles = makeStyles((theme) => ({
  desc: {
    maxWidth: '350px',
    marginLeft: '100px',
    marginBottom: '0',
    padding: '10px',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      margin: '0px auto',
      textAlign: 'center',
    },
  },
  buttons: {
    borderRadius: '30px',
    marginLeft: '2rem',
  },
  grid: {
    padding: '20px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  firstbox: {
    margin: '-10vh 10vw 20vh 4vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignSelf: 'center',

    '& a': {
      '&:hover': {
        color: 'white',
      },
    },

    [theme.breakpoints.down('sm')]: {
      margin: '2vh 10vw 0vh 0vw',
    },
  },
  secondbox: {
    width: '100%',

    '& img': {
      transform: 'translate(0px, -100px)',
      width: '100%',
      maxHeight: '400px',

      [theme.breakpoints.down('sm')]: {
        maxHeight: '350px',
        transform: 'none',
      },
    },
  },
  main: {
    minHeight: '100%',
    alignContent: 'center',
    minWidth: '200px',
  },
  details: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '300px',
    height: '300px',
    padding: '20px',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rp: {
    color: '#ef5350', // #ff00c8
    // textAlign: 'center',
    padding: '20px',
    fontFamily: 'Playfair Display',
    // textShadow: '10px 10px 20px black',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <section>
        <div className="circle-clip" />
        <div className="rings1">
          <div className="inner-ring1" />
        </div>
        <div className="rings2">
          <div className="inner-ring2" />
        </div>
        <div className="rings3">
          <div className="inner-ring3" />
        </div>
      </section>
      <Typography variant="h2" className={classes.rp} component="div">
        Research Portal
      </Typography>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <div className={classes.grid}>
        <div className={classes.firstbox}>
          <Button
            size="large"
            className={classes.buttons}
            component={Link}
            to="/projects"
            color="primary"
            variant="contained"
          >
            Projects
          </Button>
          <Button
            size="large"
            className={classes.buttons}
            component={Link}
            to="/login"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </div>
        <div className={classes.secondbox}>
          <img src={introsvg} alt="Intro" />
        </div>
      </div>
      {/* objectives */}
      <div className="main-container">
        <h1 align="center" style={{ marginBottom: '50px' }}>
          Our Objectives
        </h1>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <img alt="" src={Profile} style={{ width: '100%' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      #1
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      To encourage Research and Development and let them explore
                      the vast field of their interst.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <img alt="" src={Profile} style={{ width: '100%' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      #2
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      To let students accross the country gain rich experience
                      and exposure in research field.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <img alt="" src={Profile} style={{ width: '100%' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      #3
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      To enhance your Management Skills and interpretation of
                      results accurately.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <img alt="" src={Profile} style={{ width: '100%' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      #4
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Gives you an exposure and an oppurtunity to understand the
                      research process, to integrate theory into practice.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <div className={classes.root}>
          <Grid container direction="row" alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <div align="center">
                <img alt="" className={classes.cover} src={Profile} />
              </div>
            </Grid>
            <Grid align="center" item xs={12} md={8}>
              <CardContent className={classes.content}>
                <Typography component="h2" variant="h2">
                  Director&apos;s Message
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  laudantium tempora corrupti provident eaque eius reprehenderit
                  praesentium quasi quod aliquid? ipsum dolor sit amet
                  adipisicing elit. laudantium tempora corrupti provident eaque
                  eius reprehenderit praesentium quasi quod aliquid? ipsum dolor
                  sit amet consectetur adipisicing elit. laudantium tempora
                  corrupti provident eaque eius reprehenderit praesentium quasi
                  quod aliquid?
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
