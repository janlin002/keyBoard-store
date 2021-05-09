import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/index.css';

class Navbars extends React.Component {
  render() {
    return (
      <div>
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
              <Link className="link" to="/info">
                最新資訊
              </Link>
              <Link className="link" to="/aboutus">
                關於我們
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
