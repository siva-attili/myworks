import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "../../node_modules/pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css";
export default function HooksCarousel() {
  const [images] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 0 }
  ]);
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={5}
      isPlaying={false}
      interval={2000}
    >
      <Slider>
        {images.map(img => (
          <Slide key={img.id} index={img.id}>
            <img src={require(`../../images/carousel-${img.id}.jpg`)} />
            <DotGroup className="carousel_dot-group"></DotGroup>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}
