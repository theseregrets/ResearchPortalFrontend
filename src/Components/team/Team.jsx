import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { TEAM_INFO } from '../../Data/team';
import { colors } from '../theme/Theme';

const bg = require('../../Assets/teamBg.png').default;

const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '1em 1em',
  },
  heading: {
    color: colors.headingLight,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: '2rem',
    width: '23rem',
    height: '15rem',
  },
  content: {
    width: '50%',
    marginTop: '10%',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    padding: '1rem',
  },
  icons: {
    cursor: 'pointer',
    color: colors.teamIcon,
    margin: '8px',
    '&:hover': {
      color: 'black',
      transform: 'scale(1.25)',
    },
  },
  cover: {
    width: '11rem',
    height: '11rem',
    marginTop: '16%',
    padding: '0',
    backgroundSize: '90%',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 80%',
  },
}));

export default function Team() {
  const classes = useStyles();
  return (
    <Grid container align="center " className={classes.container}>
      <Grid item xs={12} align="center" spacing={1}>
        <Typography variant="h3" gutterBottom className={classes.heading}>
          Our Team
        </Typography>
      </Grid>
      {TEAM_INFO.map((team) => (
        <Grid item>
          <Card elevation={5} className={classes.card}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {team.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {team.contact}
              </Typography>
              <div className={classes.socials}>
                <a href={team.gh}>
                  <FaGithub size="1.5em" className={classes.icons} />
                </a>
                <a href={team.fb}>
                  <FaFacebook size="1.5em" className={classes.icons} />
                </a>
                <a href={team.li}>
                  <FaLinkedin size="1.5em" className={classes.icons} />
                </a>
              </div>
            </CardContent>
            <img src={team.image} alt={team.name} className={classes.cover} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
