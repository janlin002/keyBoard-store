import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContentbg">
        <div className="container">
          <h1 className="text-center text-white p-5">產品資訊</h1>
          <div className="row">
            <div className="col-sm-6 pb-4">
              <Link to="/product/Keyboard">
                <Card className="bg-dark text-white imgBox">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
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
            <div className="col-sm-6">
              <Link to="/product/Mouse">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1618537265960-522dcf87479b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
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
        <div>
          <hr className="hrLine" />
        </div>
      </div>
    );
  }
}

export default MainContent;
