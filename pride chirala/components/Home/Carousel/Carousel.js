import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/carousel")
      .then(response => response.json())
      .then(res => {
        setCarousel(res);
      });
  });
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
    {carousel.map(img=>(
        <Carousel.Item key={img.id} >
        <img
          className="d-block w-100"
          src={require(`../../../images/carousel-${img.pic}.jpg`)}
        />
        <Carousel.Caption>
        {img.caption}
        </Carousel.Caption>
      </Carousel.Item>
    ))}
     </Carousel>
  );
}
