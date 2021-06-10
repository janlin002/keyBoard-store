import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component
import Product from './Component/Product Info/Product';
import Warranty from './Component/Warranty/Warranty';
import MainPage from './Component/Main Page/MainPage';
import AboutUs from './Component/About Us/AboutUs';
import Keyboard from './Component/Product Info/Keyboard';
import Mouse from './Component/Product Info/Mouse';
import KeyboardModal from './Component/Product Info/KeyboardModal';
import MouseModal from './Component/Product Info/MouseModal';
import Carts from './Component/Product Info/Carts';
import Navbars from './Component/NavBars';
import Carousel from './Component/Carousel';
import Footer from './Component/Footer';
import Checkout from './Component/Checkout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbars />
          <Carousel />
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/warranty" component={Warranty}></Route>
            <Route exact path="/aboutus" component={AboutUs}></Route>
            <Route exact path="/product/Keyboard" component={Keyboard}></Route>
            <Route exact path="/product/Mouse" component={Mouse}></Route>
            <Route
              exact
              path="/product/Keyboard/keyboardmodal"
              component={KeyboardModal}
            ></Route>
            <Route
              exact
              path="/product/Keyboard/mousemodal"
              component={MouseModal}
            ></Route>
            <Route exact path="/carts" component={Carts}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
