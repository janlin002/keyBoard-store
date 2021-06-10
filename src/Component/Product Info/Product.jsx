import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Products extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg">
          <div className="container">
            <div className="p-5 text-center text-white">
              <h1>產品資訊</h1>
              <h5>致力於製造專業的機械式鍵盤、PBT材質鍵帽與各式電腦周邊產品</h5>
            </div>
            <hr className="hrLine" />
            <div className="p-5 text-center text-white">
              <h1>你在尋找...</h1>
            </div>
            <div className="row text-white">
            <div className="col-sm-6 pb-4">
                <Link to="/product/Keyboard">
                <Card className="bg-dark text-white imgBox">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Card image"
                    className="img"
                  />
                  <Card.ImgOverlay className='text-center' style={{padding: '100px'}}>
                    <Card.Title><h1>鍵盤</h1></Card.Title>
                    <Card.Text className="productText">
                    致力於製造專業的機械式鍵盤、PBT材質鍵帽與各式電腦周邊產品
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
              </div>
              <div className="col-sm-6 pb-4">
                <Link to="/product/Mouse">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1594008671712-da08718510bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                    alt="Card image"
                  />
                  <Card.ImgOverlay className='text-center' style={{padding: '100px'}}>
                    <Card.Title><h1>滑鼠</h1></Card.Title>
                    <Card.Text className="productText">
                      致力於設計出最完美的滑鼠！提供給您最好的使用體驗
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
