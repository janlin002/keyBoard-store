import React from 'react';
import { keyboard } from '../../Config';
import store from '../../redux/store';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../../redux/action';
import { connect } from 'react-redux';

class KeyboardModal extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  addToCart = (item) => {
    store.dispatch(addToCart(keyboard[item]));
  };
  render() {
    const orderId = this.props.orderId;
    return (
      <div>
        <div className="mainContentbg p-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Card className="bg-dark text-white imgBox">
                  <Card.Img
                    src={keyboard[this.props.itemId - 1].image}
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
                  <Link className="link p-0">
                    {keyboard[this.props.itemId - 1].name}
                  </Link>
                </div>
                <h1>{keyboard[this.props.itemId - 1].name}</h1>
                <h3 className="pt-3">
                  NT.${keyboard[this.props.itemId - 1].price}
                </h3>
                <h5 className="pt-5">{keyboard[this.props.itemId - 1].info}</h5>
                <div className="d-flex  submitButton pb-5">
                  <div className="pr-4 pt-3">
                    <Button variant="danger">
                      <Link to="/product/Keyboard" className="modalLink">
                        返回上一頁
                      </Link>
                    </Button>
                  </div>
                  <div className="pt-3">
                    <Button
                      variant="light"
                      onClick={() => {
                        this.addToCart(this.props.itemId - 1);
                      }}
                    >
                      加到購物車
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  itemId: state.itemId,
  orderId: state.orderId
})

const keyboardContent = connect(mapStateToProps)(KeyboardModal);

export default keyboardContent;