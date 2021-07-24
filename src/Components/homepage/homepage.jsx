/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './homepage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import introsvg from '../../Assets/illustration.svg';
import Profile from '../team/profile.png';

const useStyles = makeStyles((theme) => ({
  btnSet: {
    marginLeft: '6rem',
  },
  buttons: {
    border: '2px solid',
    borderRadius: '30px',
    marginLeft: '2rem',
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
    Width: '300px',
    height: '300px',
    padding: '20px',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginBottom: '300px' }}>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
                <p
                  style={{
                    marginTop: '20vh',
                    marginLeft: '2vw',
                    fontSize: '4rem',
                  }}
                >
                  <span style={{ color: 'blue' }}>R</span>esearch{' '}
                  <span style={{ color: 'blue' }}>P</span>ortal
                </p>
              </div>
              <div
                className="row justify-content-center"
                className={classes.btnSet}
              >
                <Button
                  component={Link}
                  to="/projects"
                  variant="outlined"
                  className="col-2"
                  className={classes.buttons}
                  color="primary"
                >
                  Projects
                </Button>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  className="col-2"
                  className={classes.buttons}
                  color="primary"
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="col ">
              <img
                src={introsvg}
                alt=""
                className="w-75 mr-4 d-flex "
                style={{ marginTop: '10vh' }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" />
          </div>
        </div>
        <div className="container" />
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
                      Lizard-1
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
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
                      Lizard-2
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
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
                      Lizard-3
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
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
                      Lizard-4
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
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
          <Grid container direction="row" alignItems="flex-start" spacing={3}>
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
