import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  img: {
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 0 0 25px',

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
    img: {
      margin: 'auto',
    },
    details: {
      padding: '20px 0 0 0',

      '& h4': {
        fontSize: '1.25rem',
      },
    },
  },
}));

export default function AnnouncementCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img src={props.img} alt="project" className={classes.img} />
      <div className={classes.details}>
        <h4>{props.title}</h4>
        <h6>{props.project}</h6>
        <div className={classes.txt}>
          <div>
            <p>{props.faculty}</p>
            <p>{props.dept}</p>
          </div>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
}
