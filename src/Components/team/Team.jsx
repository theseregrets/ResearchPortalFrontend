import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { TEAM_INFO } from '../../Data/team';

const bg = require('../../Assets/teamBg.png').default;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '10rem',
    height: '10rem',
    backgroundSize: '90%',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 80%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Team() {
  const classes = useStyles();
  return (
    <Grid container>
      {TEAM_INFO.map((team) => (
        <Grid item xs={12} sm={4} spacing={3}>
          <Card>
            <CardContent>
              <Typography component="h5" variant="h5">
                {team.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {team.contact}
              </Typography>
            </CardContent>
            <img src={team.image} alt={team.name} className={classes.cover} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
