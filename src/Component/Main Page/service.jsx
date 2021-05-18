import React from 'react';

class Server extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg">
          <div className="container">
            <h1 className="text-center text-white p-5">服務據點</h1>
            <div className="row">
              {/* <div className="col-sm-6"> */}
              <iframe
                title="googleMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4678.083971089595!2d121.57801994349524!3d25.079369929288887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac630dc74037%3A0x9bf3bb3323436391!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A5rGf5Y2X6KGXMjHlt7c!5e0!3m2!1szh-TW!2stw!4v1620482742998!5m2!1szh-TW!2stw"
                className="googleMap"
              ></iframe>
              {/* </div> */}
              <div className="col-sm-12 text-white d-flex justify-content-center text-center pt-5">
                <div className="col-sm-6">
                  <div>
                    <h5>
                      <i>
                        <b>自行開車</b>
                      </i>
                    </h5>
                    <br />
                    <p>下大直橋引道之後，美麗華在左前方方向</p>
                    <hr />

                    <h5>
                      <i>
                        <b>捷運</b>
                      </i>
                    </h5>
                    <br />
                    <p>
                      搭乘捷運文湖線至「港墘站」，3號出口出站即可抵達美麗華百樂園。
                    </p>
                    <hr />

                    <h5>
                      <i>
                        <b>停車場</b>
                      </i>
                    </h5>
                    <br />
                    <p>
                      停車場位於B2、B3，共745個停車位
                      <br />
                      停車營業時間：11:00~22:00
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Server;
