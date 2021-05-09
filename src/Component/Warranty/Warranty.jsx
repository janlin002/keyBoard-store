import React from 'react';
import NavBars from '../NavBars';
import Carousel from '../Carousel';
// 保固單

class Warranty extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg">
          <div className="container">
            <div className="p-5 text-center text-white">
              <h1>保固服務</h1>
              <h5>如需使用保固服務，請先閱讀保固條款，並提供購買證明跟填寫基本資料，我們會盡快回覆您</h5>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warranty;
