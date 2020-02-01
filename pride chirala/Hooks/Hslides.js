import React, { useState } from "react";
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
export default function Hslides() {
    const[images]=useState([{id:1},{id:2},{id:3},{id:4},{id:0}])
    return(<div>
      <div className="fade-container">
    <Fade {...fadeProperties}>
    {images.map(img=>(
     <div  key={img.id} className="each-fade">
      <div className="image-container">
      <img src={require(`../images/carousel-${img.id}.jpg`)} />
      </div>
     </div>
    ))}
     </Fade>
  </div>
     
    </div>
  );
}
