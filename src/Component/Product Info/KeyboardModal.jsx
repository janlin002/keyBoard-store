import React from 'react';
import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';
import { keyboard } from '../../Config';
import store from '../../redux/store';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

class KeyboardModal extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    console.log(this.state.itemId);
  }
  render() {
    return (
      <div>
        <Navbars />
        <Carousel />
        <div className="mainContentbg p-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Card className="bg-dark text-white imgBox">
                  <Card.Img
                    src={keyboard[this.state.itemId - 1].image}
                    alt="Card image"
                    className="img"
                  />
                </Card>
              </div>
              <div className="col-sm-6 text-white">
                <div className="d-flex pb-4">
                  <Link className="link p-0" to="/">首頁</Link>>
                  <Link className="link p-0" to="/product/Keyboard">鍵盤</Link>>
                  <Link className="link p-0">
                    {keyboard[this.state.itemId - 1].name}
                  </Link>
                </div>
                <h1>{keyboard[this.state.itemId - 1].name}</h1>
                <h3 className="pt-3">NT.${keyboard[this.state.itemId - 1].price}</h3>
                <h5 className="pt-5">{keyboard[this.state.itemId - 1].info}</h5>
                <div className="d-flex  submitButton">
                  <div className="pr-4 pt-3">
                    <Button variant="danger"><Link to="/product/Keyboard" className="modalLink">返回上一頁</Link></Button>
                  </div>
                  <div className="pt-3">
                    <Button variant="light">加到購物車</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default KeyboardModal;
