import React from 'react';
import myImage from '../Asset/img/img1.jpeg';

function Homepage() {
  return (
    <div className='container'>
      <div className='leftcontainer'>
       
        <img src={myImage} alt="My Example" />
      </div>
      <div className='rightcontainer'>
        
      </div>
    </div>
  );
}

export default Homepage;
