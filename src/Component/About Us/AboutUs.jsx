import React from 'react';
import NavBars from '../NavBars';
import Carousel from '../Carousel';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg">
          <div className="container">
            <div className="text-white text-center p-5">
              <h1>關於我們</h1>
              <div>基本服務內容以及簡單Q&A</div>
            </div>
            <hr className="hrLine" />
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
