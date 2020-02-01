import React, {useState,useEffect} from 'react';

export default function Excom1(){
    const[images,setImage]=useState([]);
   useEffect(()=>{
        fetch('http://localhost:3000/images')
        .then(response=>response.json())
       .then((res)=>{setImage(res)})
    });
return(

   <div className="col-md-6">
        {images.                                                                                                                                                                            map(img=>(
            <img src={require(`../images/carousel-${img.id}.jpg`)} className="w-100" />
        ))}
        </div>
)
}