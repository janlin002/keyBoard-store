import React from 'react';
import NavBars from '../NavBars';
import MainContent from './MainContent';
import NewProducts from './NewProducts';
import Server from './service';
import Footer from '../Footer';
import Carousels from '../Carousel';



class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavBars />
        <Carousels />
        <MainContent />
        <NewProducts />
        <Server />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
