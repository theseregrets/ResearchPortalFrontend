import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Grid, Slide, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CarouselSlide from './CarouselSlider';
import pic1 from '../../Assets/chicago.jpg';
import pic2 from '../../Assets/la.jpg';
import pic3 from '../../Assets/ny.jpg';

const useStyles = makeStyles(() => ({
  arrows: {
    height: '30px',
    margin: '0',
    cursor: 'pointer',
    position: 'relative',
    transform: 'translateY(25vh)',
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

const SLIDE_INFO = [
  { id: 1, title: 'chicago', image: pic1 },
  { id: 2, title: 'la', image: pic2 },
  { id: 3, title: 'ny', image: pic3 },
];

function Arrow(props) {
  Arrow.propTypes = {
    direction: PropTypes.string,
    clickFunction: PropTypes.func,
  };
  Arrow.defaultProps = {
    direction: 'left',
    clickFunction: () => {
      // do nothing
    },
  };
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return (
    <div
      onClick={clickFunction}
      role="button"
      tabIndex="0"
      onKeyPress={clickFunction}
    >
      {icon}
    </div>
  );
}

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
      <Grid item className={classes.arrows}>
        <Arrow direction="left" clickFunction={() => onArrowClick('left')} />
      </Grid>

      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <CarouselSlide content={content} />
        </div>
      </Slide>
      <Grid item id="rightArrow" className={classes.arrows}>
        <Arrow direction="right" clickFunction={() => onArrowClick('right')} />
      </Grid>
      <Grid container xs={12} align="center" className={classes.slideshowDots}>
        {SLIDE_INFO.map((slide, idx) => (
          <Grid
            item
            key={slide.id}
            xs={12 / numSlides}
            spacing={1}
            className={
              idx === index ? classes.slideshowDotActive : classes.slideshowDot
            }
          />
        ))}
      </Grid>
    </Grid>
  );
}
