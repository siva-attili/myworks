import React, {useState,useEffect} from 'react';
import {Row} from 'react-bootstrap';
export default function ExpCommon(){
    const[images,setImage]=useState([]);
    const[pics,setPic]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/pics')
        .then(response=>response.json())
       .then((res)=>{setPic(res)})
    });

   useEffect(()=>{
       fetch('http://localhost:3000/images')
       .then(response=>response.json())
      .then((res)=>{setImage(res)})
   });
  
return(<div>
   <Row>
        <div className="col-md-6">
        {images.                                                                                                                                                                            map(img=>(
            <img src={require(`../images/carousel-${img.id}.jpg`)} className="w-100" />
        ))}
        </div>
        <div className="col-md-6">
        {pics.map(pic=>(
            <img src={require(`../images/carousel-${pic.pic}.jpg`)} className="w-100" />
        ))}
        </div>
    </Row>
</div>)
}