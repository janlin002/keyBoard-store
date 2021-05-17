import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/index.css';

class Navbars extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbarPosition">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>
            <Link to="/" className="mainLink">
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
            <i className="fas fa-shopping-cart shopCartIcon fa-2x"></i>
            <Link className="link shopLink">購物車</Link>
            <span className="badge badge-pill badge-danger">1</span>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
