import React, {useState,useEffect} from 'react';

export default function Excom2(){
   
    const[pics,setPic]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/pics')
        .then(response=>response.json())
       .then((res)=>{setPic(res)})
    });

  
return(
  <div className="col-md-6">
        {pics.map(pic=>(
            <img src={require(`../images/carousel-${pic.pic}.jpg`)} className="w-100" />
        ))}
        </div>
)
}