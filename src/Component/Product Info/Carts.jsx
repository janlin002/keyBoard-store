import React from 'react';
import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';
import store from '../../redux/store';
import { removeItem } from '../../redux/action';

class Carts extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  removeItem = (index) => {
    store.dispatch(removeItem(index));
    this.setState(store.getState());
  };
  totalMoney = () => {
    const orderId = this.state.orderId;
    let total = 0;
    orderId.map((item)=>(
      total+=item.price
      ));
    return total;
  };
  render() {
    const orderId = this.state.orderId;
    return (
      <div>
        <Navbars />
        <Carousel />
        <div className="mainContentbg cartPadding" >
          <div className="container warrantlyBorder text-white text-center">
            <h1 className="p-3">購物車</h1>
            <div className="row text-white text-center">
              <div className="col-sm-12">
                <table className="table text-white">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">商品</th>
                      <th scope="col">價格</th>
                      <th scope="col">取消</th>
                    </tr>
                  </thead>
                  {orderId.map((item, index) => (
                    <tbody>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => {
                              this.removeItem(index);
                            }}
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
            <h5 className="text-right pr-5">
              <div>總計：{this.totalMoney()}元</div>
              
            </h5>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Carts;
