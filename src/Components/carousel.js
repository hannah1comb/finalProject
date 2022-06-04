import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselComponent extends React.Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="kayak-buffalo-national-river-arkansas.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Travel Arkansas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="arkansas-in-pictures-beautiful-places-to-photograph-buffalo-national-river.jpeg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Travel Arkansas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="panoramic-boston-mountain-landscape-at-artist-point-mountainburg-arkansas-gregory-ballos.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Travel Arkansas</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}



