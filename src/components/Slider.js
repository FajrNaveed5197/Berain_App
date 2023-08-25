import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../slider1.png";
import slider2 from "../slider2.png";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./slider.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className='heightcarousel'>
        <img src={slider1} alt='slider1' className="carousel-image" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='heightcarousel'>
        <img src={slider2} alt='slider2' className="carousel-image"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Slider;
