/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import pic from './la.jpg';
import pic1 from './chicago.jpg';
import pic2 from './ny.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={pic} alt="" srcSet="" />
          </div>
          <div>
            <img src={pic1} alt="" srcSet="" />
          </div>
          <div>
            <img src={pic2} alt="" srcSet="" />
          </div>
        </Slider>
      </div>
    );
  }
}
