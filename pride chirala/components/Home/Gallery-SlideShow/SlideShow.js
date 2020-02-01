import React,{useState,useEffect} from 'react';
import {CarouselProvider,Slider, Slide} from 'pure-react-carousel';
import {Row} from 'react-bootstrap';
export default function SlideShow(){
    const[slides,setSlide]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/slides')
        .then((response)=>response.json())
        .then((res)=>{setSlide(res)})
    })
    return(<div className="container">
        <Row>
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={10} isPlaying={false} interval={2000} >
    <Slider>
        {slides.map(slide=>(
        <Slide key={slide.id} >
            <img className="w-100" src={require(`../../../images/Gallery-images/${slide.slide}.jpg`)} />
        </Slide>))} 
        </Slider>
    </CarouselProvider>
    </Row>
        </div>
   )
}