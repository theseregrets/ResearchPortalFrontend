import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  BottomNavFix: {
    height: '60px',
  },
}));

export default function BottomNavFix() {
  const classes = useStyles();

  return <div className={classes.BottomNavFix} />;
}
