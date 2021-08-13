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
import introsvg from '../../Assets/rp_homepage.svg';
import Profile from '../../Assets/director.png';
import objective1 from '../../Assets/objective1.png';
import objective2 from '../../Assets/objective2.png';
import objective3 from '../../Assets/objective3.png';
import objective4 from '../../Assets/objective4.png';

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
      margin: '6vh 10vw 0vh 0vw',
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

  content: {
    flex: '1 0 auto',
  },

  cover: {
    width: '300px',
    height: '300px',
    padding: '20px',
    margin: '2rem 2rem',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
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
      padding: '5px',
    },
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '1em 1em',
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    // textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem',
    width: '19.3rem',
    height: '14rem',
    backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
  },
  contents: {
    margin: '1rem auto',
    textAlign: 'center',
  },
  number: {
    width: '100%',
    backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 100%)',
    margin: '0',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  covers: {
    width: '7.5rem',
    height: '7.5rem',
    marginTop: '30%',
    padding: '10px',
    filter: 'drop-shadow(7px 7px 7px #666666)',
  },
  paragraph: {
    textAlign: 'center',
    padding: '20px',
    margin: '2rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(5px)',
    boxShadow: theme.shadows[4],
    borderRadius: '10px',
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <section>
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
      <Typography variant="h4" className={classes.rp} component="div">
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
        <Typography
          gutterBottom
          variant="h3"
          component="h2"
          className={classes.title}
        >
          Our Objectives
        </Typography>
        <Grid container align="center " className={classes.container}>
          <Grid item>
            <Card elevation={5} className={classes.card}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.number}
                >
                  #1
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                  className={classes.contents}
                >
                  To encourage Research and Development and let them explore the
                  vast field of their interst.
                </Typography>
              </CardContent>
              <img
                src={objective1}
                alt="profile pic"
                className={classes.covers}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={5} className={classes.card}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.number}
                >
                  #2
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.contents}
                >
                  To let students accross the country gain rich experience and
                  exposure in research field.
                </Typography>
              </CardContent>
              <img
                src={objective2}
                alt="profile pic"
                className={classes.covers}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={5} className={classes.card}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.number}
                >
                  #3
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.contents}
                >
                  To enhance your Management Skills and interpretation of
                  results accurately.
                </Typography>
              </CardContent>
              <img
                src={objective3}
                alt="profile pic"
                className={classes.covers}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={5} className={classes.card}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.number}
                >
                  #4
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.contents}
                >
                  Gives you an exposure and an oppurtunity to understand the
                  research process, to integrate theory into practice.
                </Typography>
              </CardContent>
              <img
                src={objective4}
                alt="profile pic"
                className={classes.covers}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>
        <div className={classes.root}>
          <Grid container direction="row" alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <div align="center">
                <img alt="" className={classes.cover} src={Profile} />
              </div>
            </Grid>
            <Grid
              align="center"
              item
              xs={12}
              md={6}
              className={classes.paragraph}
            >
              <CardContent className={classes.content}>
                <Typography component="h2" variant="h4" gutterBottom>
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
