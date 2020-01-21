import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SlideCenter.css";

const SlideCenter: React.FC = () => {
  const [image] = React.useState([
    {
      pic: " pislide-bgimg  bg-img1"
    },
    {
      pic: " pislide-bgimg  bg-img2"
    },
    {
      pic: "pislide-bgimg  bg-img3"
    },
    {
      pic: "pislide-bgimg  bg-img4"
    },
    {
      pic: "pislide-bgimg  bg-img5"
    },
    {
      pic: "pislide-bgimg bg-img6"
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
