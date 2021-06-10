import React from 'react';
import store from '../../redux/store';
import { removeItem } from '../../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    const orderId = this.props.orderId;
    let total = 0;
    orderId.map((item) => (total += item.price));
    return total;
  };
  render() {
    const orderId = this.props.orderId;
    return (
      <div>
        <div className="mainContentbg cartPadding">
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
          <div className="container pt-3 pr-0">
            <div className="d-flex justify-content-end">
              <Link to="/product">
                <button type="button" class="btn btn-outline-primary mr-3">
                  繼續購物
                </button>
              </Link>
              {orderId.length > 0 ? (
                <Link to="/checkout">
                  <button type="button" class="btn btn-outline-danger">
                    前往結帳
                  </button>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orderId: state.orderId,
});

const cartContent = connect(mapStateToProps)(Carts);

export default cartContent;
