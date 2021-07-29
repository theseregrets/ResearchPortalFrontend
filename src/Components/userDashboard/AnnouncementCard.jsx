/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flex: '1',
  },
  title: {
    marginTop: '50px',
    textAlign: 'center',
    padding: '10px',
  },
  card: {
    padding: '20px',
    display: 'flex',
    backgroundColor: 'white',
    width: '80%',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& h6': {
      color: '#482ff7',
      padding: '5px 0',
    },
  },
  txt: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > p': {
      alignSelf: 'flex-end',
      margin: '0',
      color: '#101010',
    },

    '& > div > p': {
      margin: '0',
      color: '#606060',
    },
  },
  [theme.breakpoints.down('sm')]: {
    card: {
      flexDirection: 'column',
      width: '90%',
    },
    details: {
      '& h4': {
        fontSize: '1.25rem',
      },
    },
  },
}));

export default function AnnouncementCard({
  title,
  project,
  faculty,
  dept,
  time,
}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.details}>
        <h4>{title}</h4>
        <h6>{project}</h6>
        <div className={classes.txt}>
          <div>
            <p>{faculty}</p>
            <p>{dept}</p>
          </div>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
