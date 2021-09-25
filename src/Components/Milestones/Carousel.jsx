import React, { useState, useEffect } from 'react';
import { Grid, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Arrow from './CarouselNavArrow';
import CarouselSlide from './CarouselSlider';
import { SLIDE_INFO } from '../../Data/carousel';

const useStyles = makeStyles(() => ({
  arrows: {
    height: '30px',
    margin: '0px',
    cursor: 'pointer',
    position: 'relative',
    transform: 'translateY(32vh)',
  },
  slideshowDots: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  slideshowDot: {
    display: 'block',
    height: '10px',
    maxWidth: '10px',
    margin: '26px 7px 0px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#636363',
  },
  slideshowDotActive: {
    display: 'block',
    height: '10px',
    maxWidth: '10px',
    margin: '26px 7px 0px',
    borderRadius: '50%',
    cursor: 'pointer',
    transform: 'scale(1.2)',
    backgroundColor: 'white',
    border: '1px solid #636363',
  },
}));

export default function Carousel() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 300);
  };

  // autoscroll
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector('#rightArrow').firstChild.click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container justify="center" align="center" spacing={2}>
      <Grid item className={classes.arrows} xs={2}>
        <Arrow direction="left" clickFunction={() => onArrowClick('left')} />
      </Grid>

      <Slide in={slideIn} direction={slideDirection}>
        <Grid item xs={8}>
          <CarouselSlide content={content} />
        </Grid>
      </Slide>
      <Grid item id="rightArrow" className={classes.arrows} xs={2}>
        <Arrow direction="right" clickFunction={() => onArrowClick('right')} />
      </Grid>
      <Grid container align="center" className={classes.slideshowDots}>
        {SLIDE_INFO.map((slide, idx) => (
          <Grid
            item
            key={slide.id}
            xs={12 / numSlides}
            className={
              idx === index ? classes.slideshowDotActive : classes.slideshowDot
            }
          />
        ))}
      </Grid>
    </Grid>
  );
}
