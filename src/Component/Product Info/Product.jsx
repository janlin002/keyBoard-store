import React from 'react';
import NavBars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Products extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg">
          <div className="container">
            <div className="p-5 text-center text-white">
              <h1>產品資訊</h1>
              <h5>致力於製造專業的機械式鍵盤、PBT材質鍵帽與各式電腦周邊產品</h5>
            </div>
            <hr className="hrLine" />
            <div className="p-5 text-center text-white">
              <h1>你在尋找...</h1>
            </div>
            <div className="row text-white">
            <div className="col-sm-6 pb-4">
                <Link to="product/keyboard">
                  <Card className="bg-dark text-white imgBox">
                    <Card.Img
                      src="https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="Card image"
                      className="img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>鍵盤</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </div>
              <div className="col-sm-6 pb-4">
                <Link to="product/mouse">
                  <Card className="bg-dark text-white imgBox">
                    <Card.Img
                      src="https://images.unsplash.com/photo-1594008671712-da08718510bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                      alt="Card image"
                      className="img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>滑鼠</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
