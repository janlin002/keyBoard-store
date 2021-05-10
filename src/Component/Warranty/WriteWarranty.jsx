import React from 'react';

class WriteWarranty extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg text-white">
          <div className="container d-flex justify-content-center">
            <div className="row">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Name
                  </label>
                  <input type="name" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" type="mail">
                    E-mail
                  </label>
                  <input
                    type="mail"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12 text-center p-3">
                  <button type="submit" className="btn btn-dark" variant="dark">
                    送出
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WriteWarranty;
