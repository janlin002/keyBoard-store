import React from 'react';
import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';
import { mouse } from '../../Config';
import store from '../../redux/store';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../../redux/action';

class MouseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  addToCart =(item)=>{
    store.dispatch(addToCart(mouse[item]));
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
                    src={mouse[this.state.itemId - 1].image}
                    alt="Card image"
                    className="img"
                  />
                </Card>
              </div>
              <div className="col-sm-6 text-white">
                <div className="d-flex pb-4">
                  <Link className="link p-0" to="/">
                    首頁
                  </Link>
                  >
                  <Link className="link p-0" to="/product/Keyboard">
                    鍵盤
                  </Link>
                  >
                  <div className="link p-0">
                    {mouse[this.state.itemId - 1].name}
                  </div>
                </div>
                <h1>{mouse[this.state.itemId - 1].name}</h1>
                <h3 className="pt-3">
                  NT.${mouse[this.state.itemId - 1].price}
                </h3>
                <h5 className="pt-5">{mouse[this.state.itemId - 1].info}</h5>
                <div className="d-flex  submitButton pb-5">
                  <div className="pr-4 pt-3">
                    <Button variant="danger">
                      <Link to="/product/Mouse" className="modalLink">
                        返回上一頁
                      </Link>
                    </Button>
                  </div>
                  <div className="pt-3">
                    <Button variant="light" onClick={()=>{
                      this.addToCart(this.state.itemId - 1)
                    }}>加到購物車</Button>
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

export default MouseModal;
