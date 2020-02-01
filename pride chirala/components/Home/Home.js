import React from "react";
import Carousel from "../Home/Carousel/Carousel";
import Card from "../Home/card/Card";
import Box from "../Home/box/Box";
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container pc-bg1 py-2 my-2">
    <Carousel />
       <Card />
       <Box />
    </div>
     <Footer/>
     </div>
  
  );
}
