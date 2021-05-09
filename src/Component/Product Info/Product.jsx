import React from 'react';
import NavBars from '../NavBars';
import Carousel from '../Carousel';
import { Card } from 'react-bootstrap';

class Products extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg">
          <div className="container-fluid">
            <div className="p-5 text-center text-white">
              <h1>產品資訊</h1>
              <h5>致力於製造專業的機械式鍵盤、PBT材質鍵帽與各式電腦周邊產品</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
