import React from 'react';

import { Card } from 'react-bootstrap';

class Server extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg">
          <div className="container">
            <h1 className="text-center text-white p-5">服務據點</h1>
            <div className="row">
              <div className="col-sm-6">
                <iframe
                  title="googleMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4678.083971089595!2d121.57801994349524!3d25.079369929288887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac630dc74037%3A0x9bf3bb3323436391!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A5rGf5Y2X6KGXMjHlt7c!5e0!3m2!1szh-TW!2stw!4v1620482742998!5m2!1szh-TW!2stw"
                  className="googleMap"
                ></iframe>
              </div>
              <div className="col-sm-6 text-white">123</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Server;
