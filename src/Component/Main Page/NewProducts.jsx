import React from 'react';
import { Card } from 'react-bootstrap';

class NewProducts extends React.Component {
  render() {
    return (
      <div className="mainContentbg">
        <div className="container">
          <h1 className="text-center text-white p-5">最新產品</h1>
          <div className="row">
            <div className="col-sm-6 p-0">
              <a href="/product">
                <Card border="dark">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                    alt=""
                  />
                </Card>
              </a>
            </div>
            <div className="col-sm-6 text-white p-0">123</div>
            <div className="col-sm-6 text-white p-0">456</div>
            <div className="col-sm-6 p-0">
              <a href="/product">
                <Card border="dark">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                    alt=""
                  />
                </Card>
              </a>
            </div>
            
          </div>
        </div>
        <hr className="hrLine" />
      </div>
    );
  }
}

export default NewProducts;
