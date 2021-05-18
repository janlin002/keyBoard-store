import React from 'react';
import Navbars from '../NavBars';
import Carousel from '../Carousel';
import Footer from '../Footer';

class Carts extends React.Component{
    render() {
        return (
            <div>
                <Navbars />
                <Carousel />
                
                <Footer />
            </div>
        )
    }
}

export default Carts;