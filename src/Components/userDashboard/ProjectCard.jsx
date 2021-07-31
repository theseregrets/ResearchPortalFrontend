/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '25px',
    display: 'flex',
    backgroundColor: 'white',
    width: '80%',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
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
  },
}));

export default function ProjectCard({ project, desc, faculty, dept }) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardText}>
        <h4 className={classes.cardTextTitle}>{project}</h4>
        <p className={classes.cardTextContent}>{desc}</p>
        <div className={classes.txt}>
          <div>
            <p>{faculty}</p>
            <p>{dept}</p>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.delButton}
            startIcon={<DeleteIcon />}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired,
};
