import React from 'react';
import { Card, Button } from 'react-bootstrap';

import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';

import { mouse } from '../../Config'

class Mouse extends React.Component {
  render() {
    return (
      <div>
        <Navbars />
        <Carousel />
        <div className="mainContentbg pt-5">
          <div className="container">
            <div className="text-center text-white pb-5">
              <h1>滑鼠 - Mouses</h1>
            </div>
            <div className="row">
            {mouse.map((items) => (
                <div className="col-sm-4 text-center pb-5">
                <Card style={{ border: 'none' }} className="cardItem text-white" bg='dark'>
                  <Card.Img
                    variant="top"
                    src={items.image}
                  />
                  <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                      價格：${items.price}元
                    </Card.Text>
                    <div className="shopBtn">
                    <Button variant="primary" className="itemBtn btn-light" onClick={()=>{this.ProductInfoBtn(items.id)}}>查看詳情</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Mouse;
