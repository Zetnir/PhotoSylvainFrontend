import React, { Component }  from 'react';
import Footer from '../components/Footer';
import ImageOne from '../components/Image/ImageOne';


class Home extends Component {
  render() {
    return (
      <div className="section">
        <ImageOne url={"/images/white_bikini.jpg"} borderSize={40} fullScreen={true}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
