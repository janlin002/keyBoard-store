import React from 'react';
import MainContent from './MainContent';
import Customer from './Customer';
import Server from './service';



class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainContent />
        <Customer />
        <Server />
      </div>
    );
  }
}

export default MainPage;
