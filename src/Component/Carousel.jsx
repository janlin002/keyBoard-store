import React from 'react';

import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Carousels extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 CarouselImg"
              src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/product" className="mainLink">
                產品資訊
              </Link>
              <Link to="/warranty" className="mainLink">
                保固服務
              </Link>
              <Link to="/aboutus" className="mainLink">
                關於我們
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 CarouselImg"
              src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <Link to="/product" className="mainLink">
                產品資訊
              </Link>
              <Link to="/warranty" className="mainLink">
                保固服務
              </Link>
              <Link to="/aboutus" className="mainLink">
                關於我們
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 CarouselImg"
              src="https://images.unsplash.com/photo-1570378164207-c63f4e4f0563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Link to="/product" className="mainLink">
                產品資訊
              </Link>
              <Link to="/warranty" className="mainLink">
                保固服務
              </Link>
              <Link to="/aboutus" className="mainLink">
                關於我們
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
