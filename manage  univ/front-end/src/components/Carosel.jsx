import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/1170x510-toheight-90-header1.jpg'
import image2 from './images/cambridge.jpg'
import image3 from './images/Sciences.jpg'
import "./css/carosel.css"

const Carosel = () => {
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="R-shop"
          style={{"height":'75vh',"width":"100vw"}}
        />
        <Carousel.Caption>
          <h3  style={{textShadow:'3px 3px  black'}}>control system for univ</h3>
          <p> using technologies in university .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}          alt="use the cart"
          style={{"height":'75vh',"width":"100vw"}}

        />

        <Carousel.Caption>
          <h3  style={{textShadow:'1.5px 1.5px  black'}}>register or login to access</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}          alt="Offers"
          style={{"height":'75vh',"width":"100vw"}}

        />

        <Carousel.Caption>
          <h3 style={{textShadow:'3px 3px  black'}}>control system</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  


    );
}

export default Carosel;



