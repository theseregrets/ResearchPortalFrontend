/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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
  img: {
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '10px',
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '40px',
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
    cardText: {
      margin: '20px 0 0 0',
    },
    cardTextTitle: {
      fontSize: '16px',
    },
    cardTextContent: {
      fontSize: '12px',
    },
  },
}));

const data = {
  img: 'https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg',
  title:
    'Efficacy and Safety of a COVID-19 Inactivated Vaccine in Healthcare Professionals in Brazil',
  project:
    'Vaccines are urgently needed to tackle the unprecedented morbidity and mortality of COVID-19. Administration of inactivated viruses are the common and mature platform of developing new vaccines. CoronaVac is an inactivated vaccine that has undergone preclinical tests and phase I/II clinical trials.',
  faculty: 'Dr. K. Kurien Issac',
  dept: 'Aerospace engineering',
  time: '10:10 AM',
};

export default function ProjectCard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.card}>
      <div className={classes.cardText}>
        <h4 className={classes.cardTextTitle}>{data.title}</h4>
        <p className={classes.cardTextContent}>{data.project}</p>
        <div className={classes.txt}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.delButton}
            onClick={() =>
              window.location.reload(history.push('/project-detail'))
            }
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
