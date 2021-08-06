/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '25px',
    display: 'block',
    backgroundColor: 'white',
    width: '80%',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  img: {
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '10px',
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTextTitle: {
    color: '#1414b0',
  },
  cardTextContent: {
    padding: '5px 0',

    '& + p': {
      marginBottom: '0',
    },
  },
  txt: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > Button': {
      alignSelf: 'flex-end',
      margin: '0',
    },

    '& > div > p': {
      margin: '0',
      color: '#606060',
    },
  },
  delButton: {
    margin: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    card: {
      flexDirection: 'column',
      width: '90%',
    },
    img: {
      margin: 'auto',
    },
    cardTextTitle: {
      fontSize: '16px',
    },
    cardTextContent: {
      fontSize: '12px',
    },
  },
}));

export default function ProjectCard({ project, desc }) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <div className={classes.card}>
      <div className={classes.cardText}>
        <h4 className={classes.cardTextTitle}>{project}</h4>
        <p className={classes.cardTextContent}>{desc}</p>
        <div className={classes.txt}>
          <Link to={`${url}/project-detail`}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.delButton}
            >
              More Info
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
