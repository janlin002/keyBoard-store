import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg p-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-white footerIcon">
                <Link className="link" to="/product" href="#">
                  產品資訊
                </Link>
                <Link className="link" to="/warranty">
                  保固服務
                </Link>
                <Link className="link" to="/info">
                  最新資訊
                </Link>
                <Link className="link" to="/aboutus">
                  關於我們
                </Link>
              </div>
              <div className="col-sm-6 text-white  footerIcon">
                <div className="d-flex justify-content-end align-items-center">
                  <div className="pr-3">關注我們</div>
                  <i className="fab fa-facebook-square pr-2"></i>
                  <i className="fab fa-instagram pr-2"></i>
                  <i className="fab fa-twitter pr-2"></i>
                  <i className="far fa-envelope pr-2"></i>
                  <i className="fab fa-youtube pr-2"></i>
                  <i className="fas fa-phone pr-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
