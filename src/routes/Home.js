import React, { Component }  from 'react';
import ImageOne from '../components/Image/ImageOne';


class Home extends Component {
  render() {
    return (
      <div className="section">
        <ImageOne fullScreen={true} borderSize={40}></ImageOne>
      </div>
    );
  }
}

export default Home;
