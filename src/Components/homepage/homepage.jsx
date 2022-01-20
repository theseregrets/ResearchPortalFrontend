/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
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
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  desc: {
    maxWidth: '350px',
    // marginLeft: '100px',
    margin: '0 auto',
    padding: '10px',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      color: 'white',
      margin: '0px auto',
      textAlign: 'center',
    },
  },
  buttons: {
    width: '11rem',
    height: '3rem',
    borderRadius: '30px',
    margin: '2rem auto 0 auto',
    '&:hover': {
      color: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      margin: '5vh auto 0 auto',
    },
  },
  grid: {
    padding: '20px',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    // gridColumnGap: '0px',
    // gridRowGap: '0px',
    height: '80vh',
    '& > p:nth-of-type(1)': {
      gridRow: '1',
      gridColumn: '1',
    },
    '& > p:nth-of-type(2)': {
      gridRow: '2',
      gridColumn: '1',
    },
    '& > a': {
      gridRow: '3',
      gridColumn: '1',
    },
    '& > img': {
      width: '65vw',
      maxHeight: '400px',
      margin: 'auto',
      gridRow: '1/6',
      gridColumn: '2',
    },
    [theme.breakpoints.down('md')]: {
      // flexDirection: 'column-reverse',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridRowGap: '10px',
      '& > a': {
        gridRow: '4',
        gridColumn: '1',
      },
      '& > img': {
        maxHeight: '350px',
        gridRow: '3',
        gridColumn: '1',
        // transform: 'none',
      },
    },
  },
  // firstbox: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   gap: '20px',
  //   textAlign: 'center',

  //   '& a': {
  //     '&:hover': {
  //       color: 'white',
  //     },
  //   },

  //   [theme.breakpoints.down('sm')]: {
  //     // margin: '6vh 10vw 0vh 0vw',
  //   },
  // },
  // secondbox: {
  //   width: '100%',
  //   // display: 'flex',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   maxWidth: '60vw',
  //   '& img': {
  //     // transform: 'translate(0px, -100px)',
  //     width: '100%',
  //     maxHeight: '400px',
  //     gridRow: '1/6',
  //     gridColumn: '2',

  //     [theme.breakpoints.down('sm')]: {
  //       maxHeight: '350px',
  //       // transform: 'none',
  //     },
  //   },
  // },
  // img: {
  //   // transform: 'translate(0px, -100px)',
  //   width: '65vw',
  //   maxHeight: '400px',
  //   gridRow: '1/6',
  //   gridColumn: '2',

  //   [theme.breakpoints.down('sm')]: {
  //     maxHeight: '350px',
  //     gridRow: '3',
  //     gridColumn: '1',
  //     // transform: 'none',
  //   },
  // },
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
    marginTop: '5%',
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rp: {
    color: colors.homepageHeading, // #ff00c8
    // textAlign: 'center',
    padding: '20px',
    fontFamily: 'Playfair Display',
    // textShadow: '10px 10px 20px black',
    [theme.breakpoints.down('md')]: {
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
    width: '17rem',
    height: '14rem',
    backgroundImage: colors.gradients.homepageCardBg,
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  contents: {
    margin: '1rem auto',
    textAlign: 'center',
  },
  number: {
    width: '100%',
    backgroundImage: colors.gradients.homepageCardNumBg,
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
    backgroundColor: colors.bgLight,
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
      {}
      <div className={classes.grid}>
        {/* <div className={classes.firstbox}> */}
        <Typography variant="h2" className={classes.rp} component="p">
          Research Portal
        </Typography>
        <Typography variant="caption" className={classes.desc}>
          "Research is formalized curiosity. It is poking and prying with a
          purpose."
        </Typography>
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
        {/* </div> */}
        {/* <div className={classes.secondbox}> */}
        <img src={introsvg} alt="Intro" className={classes.img} />
        {/* </div> */}
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
        <Grid container align="center" className={classes.container}>
          <Grid item lg={3}>
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
          <Grid item lg={3}>
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
          <Grid item lg={3}>
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
          <Grid item lg={3}>
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
