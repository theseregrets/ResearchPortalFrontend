/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import rstatement from '../../Redux/Actions/statement';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  txt: {
    fontSize: '20px',
    margin: '20px auto',
    width: '65%',
    minHeight: '90vh',
    fontFamily: 'sans-serif',
    backgroundColor: colors.bgLight,
    backdropFilter: 'blur(10px)',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: theme.shadows[colors.shadows.researchStatement],
    whiteSpace: 'pre-line',
  },
  txtArea: {
    display: 'block',
    margin: '20px auto',
    width: '65%',
    minHeight: '90vh',
    fontSize: '20px',
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    txt: {
      width: '90%',
    },
    txtArea: {
      width: '90%',
    },
  },
}));

export default function Statement({ ie, text }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(rstatement(e.target.value));
  }

  return ie ? (
    <textarea
      value={text}
      maxLength={1500}
      onChange={handleChange}
      className={classes.txtArea}
    />
  ) : (
    <pre className={classes.txt}>{text}</pre>
  );
}

Statement.propTypes = {
  ie: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
