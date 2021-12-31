import React from "react";
import { Carousel, Container } from "react-bootstrap";
import slider1 from'assets/images/slider.1-1.png'
const Banner = () => {
  return (
    <Container className="banner_component">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
