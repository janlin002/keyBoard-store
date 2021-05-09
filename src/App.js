import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// component
import Product from './Component/Product Info/Product';
import Warranty from './Component/Warranty/Warranty';
import Info from './Component/Info/Info';
import MainPage from './Component/Main Page/MainPage';
import AboutUs from './Component/About Us/AboutUs';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/warranty" component={Warranty}></Route>
          <Route exact path="/info" component={Info}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
