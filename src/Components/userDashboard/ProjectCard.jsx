import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  cardText: {
    marginLeft: '40px',
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
  },
}));

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img
        src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg"
        alt="img"
        className={classes.img}
      />
      <div className={classes.cardText}>
        <h4 className={classes.cardTextTitle}>Project Title</h4>
        <p className={classes.cardTextContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem
          dui, cursus id enim eu, bibendum mollis quam. Nunc vel dignissim
          sapien. Duis vitae mi ac odio tempus dapibus eget rutrum lacus. Fusce
          eros sem, egestas porttitor rutrum aliquet, rutrum et erat. Donec vel
          tempor ex.
        </p>
      </div>
    </div>
  );
}
