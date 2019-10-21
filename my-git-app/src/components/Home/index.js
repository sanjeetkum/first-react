import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

function Home() {
  return (

  <Carousel autoplay>
    <div>
      <img className='image1'></img>
    </div>
    <div>
    <img className='image2'></img>
    </div>
    <div>
    <img className='image3'></img>
    </div>
    <div>
    <img className='image4'></img>
    </div>
  </Carousel>
          
  );
}

export default Home;
