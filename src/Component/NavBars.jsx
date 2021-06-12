import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/index.css';
import store from '../redux/store';

import { connect } from 'react-redux';

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange);
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  render() {
    return (
      <div className="navbarPosition">
        <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
          <Navbar.Brand>
            <Link to="/keyBoard-store/" className="mainLink">
              鍵盤買賣
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="link" to="/product" href="#">
                產品資訊
              </Link>
              <Link className="link" to="/warranty">
                保固服務
              </Link>
              {/* <Link className="link" to="/info">
                最新資訊
              </Link> */}
              <Link className="link" to="/aboutus">
                關於我們
              </Link>
            </Nav>

            <Link to="/carts">
              <i className="fas fa-shopping-cart shopCartIcon fa-2x" />
              <span className="badge badge-pill badge-danger">
                {this.props.orderId.length}
              </span>
            </Link>
            <Link to="/carts" className="shopLink link">
              購物車
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  orderId: state.orderId
})

const pageNavbar = connect(mapStateToProps)(Navbars);

export default pageNavbar;
