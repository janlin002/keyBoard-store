import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';
import Modals from './KeyboardModal';
import { keyboard } from '../../Config/';
import store from '../../redux/store';
import { itemId } from '../../redux/action'

class Keyboard extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    console.log(this.state, 'state');
  }
  sendItemsId = (id) => {
    store.dispatch(itemId(id));
  };
  render() {
    return (
      <div>
        <Navbars />
        <Carousel />
        <div className="mainContentbg pt-5">
          <div className="container">
            <div className="text-center text-white pb-5">
              <h1>鍵盤 - KeyBoards</h1>
            </div>
            <div className="row">
              {keyboard.map((items) => (
                <div className="col-sm-4 text-center pb-5">
                  <Card
                    style={{ border: 'none' }}
                    className="cardItem text-white"
                    bg="dark"
                  >
                    <Card.Img variant="top" src={items.image} />
                    <Card.Body>
                      <Card.Title>{items.name}</Card.Title>
                      <Card.Text>價格：${items.price}元</Card.Text>
                      <div className="shopBtn">
                        <Button
                          variant="primary"
                          className="itemBtn btn-light"
                          onClick={() => {
                            this.sendItemsId(items.id);
                          }}
                        >
                          <Link
                            to="/product/Keyboard/keyboardmodal"
                            className="infoLink"
                          >
                            查看詳情
                          </Link>
                        </Button>
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

export default Keyboard;
