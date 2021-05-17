import React from 'react';
import NavBars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg pt-5">
          <div className="container warrantlyBorder">
            <div className="text-white text-center p-5">
              <h1>關於我們</h1>
              <div>基本服務內容以及簡單Q&A</div>
            </div>
            <hr className="hrLine" />
            <div className="text-white text-center p-5">
              <h1>我們提供的服務</h1>
              <div className="pt-3">
                <div className="pt-3">提供最專業的機械鍵盤</div>
                <div className="pt-3">提供完善的售後服務</div>
                <div className="pt-3">擁有最先進的技術</div>
                <div className="pt-3">提供現場試打</div>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="text-white text-center p-5">
              <h1 className="p-3">簡單Q&A</h1>
              <h5 className="text-warning">營業時間?</h5>
              <div>早上9:00~晚上6:00</div>
              <h5 className="pt-3 text-warning">多少錢可以免運？</h5>
              <div>單筆消費達到五千即可免運</div>
              <h5 className="pt-3 text-warning">可否分期付款？</h5>
              <div>可以</div>
              <h5 className="pt-3 text-warning">付款方式</h5>
              <div>現金或信用卡都可接受</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
