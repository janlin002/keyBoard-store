import React from 'react';
import { keyboard, mouse } from '../Config';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContentbg text-white text-center m-0">
          <h1 style={{padding: '150px'}}>感謝你的購物!</h1>
          <h3 className="p-4">猜你可能也喜歡</h3>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div class="card bg-dark">
                  <img src={keyboard[0].image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-white">{keyboard[0].name}</h5>
                    <p class="card-text text-white">
                      {keyboard[0].info}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card bg-dark">
                  <img src={mouse[1].image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-white">{mouse[1].name}</h5>
                    <p class="card-text text-white">
                      {mouse[1].info}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card bg-dark">
                  <img src={keyboard[3].image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-white">{keyboard[3].name}</h5>
                    <p class="card-text text-white">
                      {keyboard[3].info}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card bg-dark">
                  <img src={mouse[3].image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-white">{mouse[3].name}</h5>
                    <p class="card-text text-white">
                      {mouse[3].info}
                    </p>
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

export default Checkout;
