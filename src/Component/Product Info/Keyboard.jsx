import React from 'react';
import { Card, Button } from 'react-bootstrap';

import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';

class Keyboard extends React.Component {
  render() {
    return (
      <div>
        <Navbars />
        <Carousel />
        <div className="mainContentbg pt-5">
          <div className="container">
            <div className="text-center text-white pb-5">
              <h1>鍵盤 - KeyBoards</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <Card style={{ border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1616837662891-c62d5fe6418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-4">
                <Card style={{ border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1616837662891-c62d5fe6418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-4">
                <Card style={{ border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1616837662891-c62d5fe6418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Keyboard;
