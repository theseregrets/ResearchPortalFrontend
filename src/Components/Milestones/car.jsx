import React, { Component } from "react";
import Slider from "react-slick";
import pic from './la.jpg'
import pic1 from './chicago.jpg'
import pic2 from './ny.jpg'

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
            <img src={pic} alt="" srcset="" />
          </div>
          <div>
            <img src={pic1} alt="" srcset="" />
          </div>
          <div>
          <img src={pic2} alt="" srcset="" />
          </div>
        </Slider>
      </div>
    );
  }
}