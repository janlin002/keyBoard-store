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
              <Link to="product">
                <Card className="bg-dark text-white imgBox">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                    alt="Card image"
                    className="img"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>鍵盤</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
            <div className="col-sm-6">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>滑鼠</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            {/* <div className="col-6 pb-4">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="col-6">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div> */}
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
