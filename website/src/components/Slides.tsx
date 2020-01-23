import * as React from 'react';
import './Slides.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slides: React.FC = () => {
    const [image] = React.useState(
        [
            {
                pic: "01"
             },
            {
                pic: "02"
            },
            {
                pic: "03"
            },
            {
                pic: "04"
            },
            {
                pic: "05"
            }
        ]
    );
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
        >
            {image.map((img, index) => (
                <div key={index}>
                    <img src={require(`../../public/images/pihome-img${img.pic}.jpg`)} alt="" />
                </div>
            ))}
        </Carousel>
    );
}
export default Slides;