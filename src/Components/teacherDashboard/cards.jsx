/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '25px',
    display: 'block',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    width: '80%',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: theme.shadows[colors.shadows.projectCard],
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
    color: colors.projectHeading,
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

    '& > a': {
      textDecoration: 'none',
    },

    '& > Button': {
      alignSelf: 'flex-end',
      margin: '0',
    },

    '& > div > p': {
      margin: '0',
      color: colors.cardFaculty,
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

export default function ProjectCard({ project, desc, slug }) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <div className={classes.card}>
      <div className={classes.cardText}>
        <Typography variant="h5" className={classes.cardTextTitle}>
          {project}
        </Typography>
        <p className={classes.cardTextContent}>{desc}</p>
        <div className={classes.txt}>
          <Link to={`${url}/project-detail/${slug}`}>
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
