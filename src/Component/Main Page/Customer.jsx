import React from 'react';

class NewProducts extends React.Component {
  render() {
    return (
      <div className="mainContentbg">
        <div className="container">
          <h1 className="text-center text-white p-5">顧客回饋</h1>
          <div className="row text-white text-center">
            <div className="col-sm-4">
              <img
                src="https://randomuser.me/api/portraits/men/90.jpg"
                className="bighead mb-4"
                alt=""
              />
              <h2>Mr.Lin</h2>
              <p>很喜歡鍵盤的手感，之後有需要還是會回來買</p>
            </div>
            <div className="col-sm-4">
              <img
                src="https://randomuser.me/api/portraits/women/70.jpg"
                className="bighead mb-4"
                alt=""
              />
              <h2>Mrs.Lian</h2>
              <p>老闆態度很好，會很有耐心地講解不同鍵盤的優缺點</p>
            </div>
            <div className="col-sm-4">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                className="bighead mb-4"
                alt=""
              />
              <h2>Mrs.Huang</h2>
              <p>東西好，價格便宜，會再回購</p>
            </div>
          </div>
        </div>
        <hr className="hrLine" />
      </div>
    );
  }
}

export default NewProducts;
