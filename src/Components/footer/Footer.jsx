import React from 'react';
import {
  AppBar,
  Grid,
  Link,
  Container,
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FaPhoneAlt } from 'react-icons/fa';
import { colors } from '../theme/Theme';

const logo = require('../../Assets/rplogo.svg').default;

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'underline',
    // hover in css jsx
    '&:hover': {
      textDecoration: 'underline',
      color: 'white',
      textDecorationColor: 'white',
    },
  },
  icon: {
    marginRight: '1rem',
  },
  logo: {
    width: '15vw',
    margin: '10px',
    filter: 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      width: '20vw',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" color={colors.footerBg}>
      <Box py={{ xs: 3 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={9}>
              <Box>
                <a className={classes.link} href="https://nitdgp.ac.in/">
                  National Institute of Technology, Durgapur
                </a>
              </Box>
              <Box>
                Mahatma Gandhi Rd, A-Zone, <br /> Durgapur, West Bengal - 713209
              </Box>
              <Box my={2}>
                <FaPhoneAlt className={classes.icon} />
                0343 275 4680
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.align}>
              <Box>
                <Link className={classes.link} href="/about-us">
                  Contact Us
                </Link>
                <br />
                <img src={logo} className={classes.logo} alt="logo" />
              </Box>
            </Grid>
          </Grid>
          <Box mt={1}>
            <Typography align="center">
              © 2021 Copyright: nitdgp.ac.in
            </Typography>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}
