import React, { Component }  from 'react';


class Home extends Component {
  render() {
    return (
      <div className="section">
        <img className='bg-image' src="https://images8.alphacoders.com/484/484717.jpg" alt="Italian Trulli"/>
        <div className='screen-image d-flex flex-column justify-content-end align-items-end pb-4'>
          <div className='w-25 justify-content-start align-items-end'>
            <h1>Sylvain Behary</h1>
            <p>Photographe professionnelle</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
