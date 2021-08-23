import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 5,
    margin: '15px 25px',
    height: '65vh',
    width: '65vw',
    boxShadow: '20px 20px 20px black',
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    zIndex: '100',
    height: '65vh',
    width: '65vw',
  },
}));

export default function CarouselSlider(props) {
  CarouselSlider.propTypes = {
    content: PropTypes.arrayOf,
    title: PropTypes.string,
    image: PropTypes.objectOf,
  };
  CarouselSlider.defaultProps = {
    content: [],
    title: 'Test',
    image: null,
  };
  const { content } = props;
  const { title, image } = content;

  const classes = useStyles();

  return (
    <Grid align="center">
      <Card className={classes.card}>
        <div>
          <CardMedia
            component="img"
            className={classes.media}
            src={image.default}
            title={title}
          />
        </div>
      </Card>
    </Grid>
  );
}
