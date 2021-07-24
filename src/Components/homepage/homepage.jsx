/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import introsvg from '../../Assets/illustration.svg';
import './homepage.css';

const useStyles = makeStyles((theme) => ({
  btnSet: {
    marginLeft: '6rem',
  },
  buttons: {
    borderRadius: '30px',
    marginLeft: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateRows: '70vw 20vw',
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '20vw 50vw',
      columnGap: '27vw',
      gridTemplateRows: '0vw',
    },
  },
  firstbox: {
    gridRow: '2 / 3',
    [theme.breakpoints.up('sm')]: {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },
  },
  secondbox: {
    gridRow: '1 / 2',
    width: '90vw',
    marginLeft: '5vw',
    [theme.breakpoints.up('sm')]: {
      gridColumn: '2 / 3',
      width: 'auto',
      marginLeft: '0vw',
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
      <div className={classes.grid}>
        <div className={classes.firstbox}>
          <Button
            className={classes.buttons}
            color="primary"
            variant="outlined"
          >
            Projects
          </Button>
          <Button
            className={classes.buttons}
            color="primary"
            variant="outlined"
          >
            Login
          </Button>
        </div>
        <div className={classes.secondbox}>
          <img src={introsvg} alt="Intro" />
        </div>
      </div>
    </div>
  );
}
