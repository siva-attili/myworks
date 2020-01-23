import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SlideCenter.css";

const SlideCenter: React.FC = () => {
  const [image] = React.useState([
    {
      pic: " bg bg1"
    },
    {
      pic: " bg bg2"
    },
    {
      pic: " bg bg3"
    },
    {
      pic: "bg bg4"
    },
    {
      pic: "bg bg5"
    },
    {
      pic: "bg bg6"
    }
  ]);
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
    >
      {image.map((img, index) => (
        <div key={`Slide${index}`} className={`${img.pic}`}></div>
      ))}
    </Carousel>
  );
};
export default SlideCenter;
