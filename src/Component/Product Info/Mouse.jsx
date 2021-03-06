import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { mouse } from '../../Config';
import store from '../../redux/store';
import { itemId } from '../../redux/action';

class Mouse extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  sendItemsId = (id) => {
    store.dispatch(itemId(id));
  };
  render() {
    return (
      <div>
        <div className="mainContentbg pt-5">
          <div className="container">
            <div className="text-center text-white pb-5">
              <h1>滑鼠 - Mouses</h1>
            </div>
            <div className="row">
              {mouse.map((items, key) => (
                <div className="col-sm-4 text-center pb-5">
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
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
                              to="/product/Keyboard/mousemodal"
                              className="infoLink"
                            >
                              查看詳情
                            </Link>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mouse;
