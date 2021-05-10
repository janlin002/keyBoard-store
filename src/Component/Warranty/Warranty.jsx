import React from 'react';
//Component
import NavBars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';
import WriteWarranty from './WriteWarranty';

import { Button } from 'react-bootstrap';
// redux
import store from '../../redux/store';
import { checkboxClick } from '../../redux/action';

class Warranty extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  checkboxClick = () => {
    store.dispatch(checkboxClick(1));
  };
  render() {
    return (
      <div>
        <NavBars />
        <Carousel />
        <div className="mainContentbg pt-5">
          <div className="container warrantlyBorder">
            <div className="p-5 text-center text-white">
              <h1>保固服務</h1>
              <h5>
                如需使用保固服務，請先閱讀保固條款，並提供購買證明跟填寫基本資料，我們會盡快回覆您
              </h5>
            </div>
            <hr className="hrLine" />
            <div className="text-white text-center p-5">
              <h1>保固條款</h1>
              <div>
                <div className="p-3">
                  <h5>保固聲明</h5>
                  <ul>
                    <li>
                      本產品在使用時，不能將液體或是任何飲料倒入於鍵盤內，這樣會使的鍵盤完全無法使用，也無法維修，請消費者要特別注意。
                    </li>
                    <li>
                      若產品損壞是由於人為所造成的損壞，如可維修，將會依照損壞情況收取維修費用；如不能維修將退還給消費者。若已有拆開過產品本體，或是擅自刪除原來的序列號或貼紙，保修將被作廢。
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <h5>保固地區限制</h5>
                  <div>限購買國家，不可跨國保固</div>
                </div>
                <div className="p-3">
                  <h5>保固時間限制</h5>
                  <div>保固時間為售後一年，如果超過一年則不在保固範圍</div>
                </div>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="text-center text-white p-5">
              <h1 className="p-3">同意聲明書</h1>
              <div className="d-flex justify-content-center p-3">
                <input
                  className="checkboxStyle"
                  type="checkbox"
                  onClick={this.checkboxClick}
                />
                <h5 className="pl-2">本人已經詳細看過保固聲明並且願意保固</h5>
              </div>
              {store.getState().checkboxCheck.length === 0 ? (
                <Button variant="dark" theme="dark">
                  送出
                </Button>
              ) : null}
              {console.log(store.getState().checkboxCheck.length, 'hello')}
            </div>
            <WriteWarranty />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Warranty;
