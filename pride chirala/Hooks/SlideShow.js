import React from 'react';
import './sshow.css';
import { Fade } from 'react-slideshow-image';

 const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  autoplay:true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
export const Slideshow = () => {
  return (
    <div>
      <div className="fade-container">
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={require('../images/carousel-0.jpg')} />
        </div>
       </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={require('../images/carousel-1.jpg')} />
        </div>
        </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={require('../images/carousel-2.jpg')} />
        </div>
        
      </div>
    </Fade>
  </div>
  <p>hello</p></div>
    
  )
}